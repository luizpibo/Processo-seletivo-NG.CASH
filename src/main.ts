import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const prisma = new PrismaService();
  const app = await NestFactory.create(AppModule);
  await prisma.enableShutdownHooks(app)
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
