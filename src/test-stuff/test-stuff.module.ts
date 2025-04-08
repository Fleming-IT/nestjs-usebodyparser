import { Module } from '@nestjs/common';
import { TestStuffController } from './test-stuff.controller';

@Module({
  controllers: [TestStuffController]
})
export class TestStuffModule {}
