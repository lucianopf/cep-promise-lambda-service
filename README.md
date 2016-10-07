# Cep-promise Microservice

Projeto construido com intuito de criar um micro serviço que resolva endereços de CEPs utilizando a biblioteca [cep-promise](https://github.com/filipedeschamps/cep-promise).

O projeto consiste em um serviço construido usando a framework [Serverless](https://serverless.com/) que posteriormente fará o deploy para uma função [AWS Lambda](https://aws.amazon.com/lambda/details/) e irá criar um 
endpoint no [API Gateway](https://aws.amazon.com/api-gateway/).

[Demo](https://twzye0bsdk.execute-api.us-east-1.amazonaws.com/dev/cep?number=05010000)

## Features
 
 * Altamente escalável por utilizar funções AWS Lambda.
 * O nível gratuito do Lambda inclui 1 milhão de solicitações gratuitas por mês e 400.000 GB/segundo de tempo de computação por mês.
 * Sempre retorna a resposta do serviço mais rápido, por ser concorrente.
 * Sem cobranças por ociosidade, pague apenas pelo utilizado!
 * Sempre atualizado em tempo-real por se conectar diretamente aos serviços dos Correios ou ViaCEP.

## Como utilizar

### Instalação

Primeiro deve-se ter instalado em sua maquina o [Serverless](https://serverless.com/) e ter suas [credenciaid AWS configuradas](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) em sua maquina.

```
$ git clone https://github.com/lucianopf/cep-promise-lambda-service.git
$ cd cep-promise-lambda-service
$ npm i
$ sls depoy
```

Após isso será mostrado no terminal o endpoint usado para invocar o seu serviço de ceps. 

### Realizando uma consulta

```
$ curl -X GET 'https://twzye0bsdk.execute-api.us-east-1.amazonaws.com/dev/cep?number=05010000'
```

No comando acíma é possível observar que para a consulta é necessário a URL do endpoint fornecido pela AWS, o caminho
da função requerida e *number* como parâmetro de busca ("?number=05010000").
