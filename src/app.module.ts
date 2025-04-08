import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestStuffModule } from './test-stuff/test-stuff.module';

@Module({
  imports: [TestStuffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
