  <p align="left">A potential app to manage an investment portfolio, capable of centralize all types of investments.</p>
    <p align="left">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<!--     <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a> -->
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Availavle branches
please visit: 
- dev
- main

## Installation

```bash
git clone https://github.com/afrancocedeno/social-app-backend
```

```bash
git checkout dev
```

```bash
$ npm install
```

create your `.env` file and set up the following variables:
```
DATABASE_NAME
DATABASE_PORT
POSTGRES_DB
POSTGRES_PORT
POSTGRES_PASSWORD
POSTGRES_PORT
POSTGRES_HOST
API_KEY
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

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
\d+
```

### tools used
> postman
> tableplus

### things to master
- how to response the same orders in keys for each object
- create gett comments by message
- create get messages by user
- create get messages by myuser
- isComment typo in dto ?
- do not initiate the project if config env are not set

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Linkedin - [@afrancocedeno](https://www.linkedin.com/in/afrancocedeno/)

## License

Nest is [MIT licensed](LICENSE).

