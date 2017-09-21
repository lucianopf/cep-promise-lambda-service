'use latest';
import bodyParser from 'body-parser';
import express from 'express';
import Webtask from 'webtask-tools';
import { MongoClient } from 'mongodb';
import { ObjectID } from 'mongodb';

const collection = 'romulo';
const server = express();


server.use(bodyParser.json());

server.get('/:_id', (req, res, next) => {
  const { MONGO_URL } = req.webtaskContext.data;
  MongoClient.connect(MONGO_URL, (err, db) => {
    const { _id } = req.params ;
    if (err) return next(err);
    db.collection(collection).findOne({ _id : new ObjectID(_id) }, (err, result) => {
      db.close();
      if (err) return next(err);
      res.status(200).send(result);
    });
  });
});

server.get('/', (req, res, next) => {
  const { MONGO_URL } = req.webtaskContext.data;
  MongoClient.connect(MONGO_URL, (err, db) => {
    const { _id } = req.params ;
    if (err) return next(err);
    db.collection(collection).find({}, (err, result) => {
      db.close();
      if (err) return next(err);
      res.status(200).send(result);
    });
  });
});

server.post('/', (req, res, next) => {
  const { MONGO_URL } = req.webtaskContext.data;
  // Do data sanitation here.
  const model = req.body;
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) return next(err);
    db.collection(collection).insertOne(model, (err, result) => {
      db.close();
      if (err) return next(err);
      res.status(201).send(result);
    });
  });
});

module.exports = Webtask.fromExpress(server);
