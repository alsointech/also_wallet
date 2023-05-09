// depencencies
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// modules
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('sociail app backend')
    .setVersion('1.0')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document)

  app.enableCors()
  
  await app.listen(process.env.PORT || 3000)
  
}
bootstrap();
