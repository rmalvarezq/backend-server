import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config2: ConfigService = app.get(ConfigService);
  const port: number = config2.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const config = new DocumentBuilder()
  .setTitle('Swagger Documentantion')
  .setDescription('All APIs description')
  .setVersion('1.0')
  .addTag('user')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);

 //rutas adicionales
 SwaggerModule.createDocument(
  app,
  new DocumentBuilder()
    .setTitle('Cats')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build(),
);
SwaggerModule.createDocument(
  app,
  new DocumentBuilder()
    .setTitle('products')
    .setDescription('The products API description')
    .setVersion('1.0')
    .addTag('products')
    .addBearerAuth()
    .build(),
);

SwaggerModule.setup('api', app, document);
  await app.listen(port, () => {
    // console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}
bootstrap();
