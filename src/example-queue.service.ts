import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ExampleQueueService {
  constructor(@InjectQueue('example-queue') private readonly queue: Queue) {}

  async addJob(data: any) {
    await this.queue.add('example-job', data);
  }
}
