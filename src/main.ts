import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('user')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  //rutas adicionales
  SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Dogs example')
      .setDescription('The dogs API description')
      .setVersion('1.0')
      .addTag('cats')
      .addBearerAuth()
      .build(),
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
