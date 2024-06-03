import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { logger } from './produtos.middleware';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService],
})

export class ProdutosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(ProdutosController);
  }
}
