import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Processor('example-queue')
export class ExampleQueueConsumer {
  private readonly logger = new Logger(ExampleQueueConsumer.name);
  @Process('example-job')
  handleExampleJob(job: Job) {
    this.logger.log(`Processing job with ID ${job.id} and data:`, job.data);
    // Define a file path
    const filePath = join(__dirname, 'output.txt');

    // Write to the file
    try {
      fs.writeFileSync(filePath, job.data);
      console.log(`Data written to ${filePath}`);
    } catch (error) {
      console.error(`Failed to write to file: ${error.message}`);
    }

    // Your processing logic here...
    this.logger.log('Doing something...');
  }
}
