// depencencies
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// modules
import { AppModule } from './app.module';
import { Repository } from 'typeorm';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  const swaggerDescription = '\
    AlsoWallet is an app to manage your investment portfolio and control your finances\n\
    \u2022\tabstract: consider this document as the manual or the reference card related to functional software development of the app, endpoints\n\
    \u2022\tarch: this project user a modular arquitecture wich makes it easy to scalate by creating new features the easiest way\n\
    \u2022\tif you want to try this from your local machine you can consume https://www.youtube.com/watch?v=CLG0ha_a0q8\n\
    \u2022\tcode base: you can find it in the github Repository, please visit: https://github.com/afrancocedeno/also_wallet\n\
  '
  


  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription(swaggerDescription)
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document)

  app.enableCors()

  await app.listen(process.env.PORT || 3000)

}
bootstrap();
