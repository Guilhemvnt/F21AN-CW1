import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Celia API')
  .setDescription('The Celia API description')
  .setVersion('1.0')
  .addBearerAuth(
    { 
      // I was also testing it without prefix 'Bearer ' before the JWT
      description: `[just text field] Please enter token in following format: Bearer <JWT>`,
      name: 'Authorization',
      bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
      scheme: 'Bearer',
      type: 'http', // I`ve attempted type: 'apiKey' too
      in: 'Header'
    },
    'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.EXPOSE_APP_PORT ?? 3000, '0.0.0.0');  // Binding to 0.0.0.0
}
main();
