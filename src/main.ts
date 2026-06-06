import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bansay Gateway API')
    .setDescription('The API Gateway for the Bansay Microservices ecosystem, providing access to User, Liability, and Attendance services.')
    .setVersion('1.0')
    .addTag('User', 'User management and profile operations')
    .addTag('Liability', 'Liability and credit tracking')
    .addTag('Attendance', 'Attendance and check-in/out tracking')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(3000);
}
bootstrap();
