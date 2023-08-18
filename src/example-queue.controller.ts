import { Controller, Get } from '@nestjs/common';
import { ExampleQueueService } from './example-queue.service';
import { join } from 'path';
import * as fs from 'fs';

@Controller('queue')
export class ExampleQueueController {
  constructor(private readonly exampleQueueService: ExampleQueueService) {}

  @Get('/job')
  async addJob() {
    await this.exampleQueueService.addJob('Hello World!');
    return { message: 'Job added!' };
  }
}
