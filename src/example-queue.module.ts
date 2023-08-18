import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ExampleQueueService } from './example-queue.service';
import { ExampleQueueController } from './example-queue.controller';
import { ExampleQueueConsumer } from './example-queue.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'example-queue',
    }),
  ],
  providers: [ExampleQueueService, ExampleQueueConsumer],
  controllers: [ExampleQueueController],
})
export class ExampleQueueModule {}
