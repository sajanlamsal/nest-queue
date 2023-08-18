import { Controller, Get } from '@nestjs/common';
import { ExampleQueueService } from './example-queue.service';

@Controller('queue')
export class ExampleQueueController {
  constructor(private readonly exampleQueueService: ExampleQueueService) {}

  @Get('/job')
  async addJob() {
    await this.exampleQueueService.addJob('Hello World!');
    return { message: 'Job added!' };
  }
}
