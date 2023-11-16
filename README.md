<p align="left">
  <h1>Also Wallet</h1> 
AlsoWallet is an app to manage your investment portfolio and control your finances. abstract: consider this repository refers to the functional software development source code base. arch: this project user a modular arquitecture wich makes it easy to scalate by creating new features the easiest way.
</p>
<p align="left">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://dl.circleci.com/status-badge/redirect/circleci/FJkq4GGBwCQAatFishFpVx/S1oCP4hiuw5Mwq4y1kmZHa/tree/main" target="_blank"><img src="https://dl.circleci.com/status-badge/img/circleci/FJkq4GGBwCQAatFishFpVx/S1oCP4hiuw5Mwq4y1kmZHa/tree/main.svg?style=svg" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/afrancocedeno/also_wallet?branch=main" target="_blank"><img src="https://coveralls.io/repos/github/afrancocedeno/also_wallet/badge.svg?branch=main" alt="Coverage" /></a>
  <a href="https://opencollective.com/tambienlatino#backer" target="_blank"><img src="https://opencollective.com/tambienlatino/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/tambienlatino#sponsor" target="_blank"><img src="https://opencollective.com/tambienlatino/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/afrancocedeno?country.x=CO&locale.x=es_XC" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>

</p>

## Availavle branches
please principal branchesvisit: 
- [dev](https://github.com/afrancocedeno/also_wallet/tree/dev)
- main

## Installation

```bash
git clone https://github.com/afrancocedeno/social-app-backend
```

```bash
# optional - you can run from main branch
git checkout dev
```

```bash
$ npm install
```

create your `.env` file and set up the following variables:
```
<!-- DATABASE_NAME
DATABASE_NAME
DATABASE_PORT
POSTGRES_DB
POSTGRES_PORT
POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_HOST
API_KEY -->
DATABASE_URL=postgres://root:123456@localhost:5432/also_wallet
DATABASE_NAME=also_wallet
DATABASE_PORT=5432
API_KEY=123456
```

## take a look to the dependencies for this prokect on `package.json` file or list them as follows:
```bash
npm list
```

## Running the app

```bash
# development
$ npm run start

# rise the server in watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation

> if you are in development environment you can access the documentation from your browser by using this [link](localhost:3000/docs) 

> if you are in production environment you can access the documentation from your browser by using this [link](also-wallet-backend.onrender.com/docs) 



## Typeorm

### create new migrations
1. package.json
2. command
```bash
npm run migrations:generate ./src/database/migration/<change_description_name>
```

please visit [TypeORM](https://typeorm.io/migrations#how-migrations-work) offitial documentation.

also add these lines to your package.json scripts an test them with `npm run <pckge.json_script>`
```json
  "scripts": {
    /* ... */
    "typeorm": "typeorm-ts-node-esm -d src/<path_to>/data-source.ts",
    "migrations:generate": "npm run typeorm -- migration:generate",
    "migrations:run": "npm run typeorm -- migration:run",
    "migrations:show": "npm run typeorm -- migration:show",
    "migrations:drop": "npm run typeorm -- schema:drop"
  }
```

##
patron repository  -> typeorm


## migrations usage
first create
```npm run migrations:show```
```npm run migrations:generate <path-to-migrations-dir/migration-name>```
then run
```npm run migrations:show```
```npm run migrations:run```
after making changes to entities run again
```npm run migrations:show```
```npm run migrations:generate <path-to-migrations-dir/migration-name>```

## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Contribute

```bash
# get this repo to your machine
git clone https://github.com/afrancocedeno/also_wallet.git
```

```bash
# set the development branch to dev
git checkout <feature/your_feature>
```

## docker commands

1. Start docker desktop (for this we are using WSL)

2. raise the service
```bash
sudo docker-compose up -d postgres
```

3. check status service
```bash
sudo docker-compose ps
```

4. check logs of build
```bash
sudo docker-compose logs
sudo docker-compose logs -f postgres
```

5. access container
```bash
# access manually
docker-compose exec postgres bash
psql -d also_wallet
```

6. stop container
```bash
sudo docker-compose down
```

7. sql
```bash
psql -h localhost -d also_wallet -U root
```

8. sql
```bash
# list all relations
\d+
```

### tools used
> postman
> tableplus

### things to master

- Frontend
- an AI that allows to register investments or downpayments
- an membership module to educate in all topics of the app

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Alejandro Franco Cedeño
- Linkedin - [@afrancocedeno](https://www.linkedin.com/in/afrancocedeno/)

## License

Nest is [MIT licensed](LICENSE).

