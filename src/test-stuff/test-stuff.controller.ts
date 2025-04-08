import { Body, Controller, Post } from '@nestjs/common';
import { Dto } from './dto';

@Controller('test-stuff')
export class TestStuffController {
  @Post()
  add(@Body() dto: Dto) {
    console.log(dto);
    return dto.Herring + dto.Trout;
  }
}
