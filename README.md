# GoBarber back

Project developed with Node and postgres for data base relacional and Mongodb for for base not relacional for send notifications, sending email and lines with Redis.

login with token and control authenticated, with mongoose, rest application.

this project consist in make scheduling for a barbershop choosing a avaliabled hours

### Installation

Requires [Node.js](https://nodejs.org/) v10+ to run and Docker.

Install docker Images data bases

```sh
docker run --name postgresdb -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

docker run --name mongodb -p 27017:27017 -d -t mongo

docker run --name redisdb -p 6379:6379 -d -t redis
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd gobarber-back
$ yarn
$ yarn sequelize db:migrate
$ yarn dev
```

Start the lines jobs

```sh
$ yar queue
```
