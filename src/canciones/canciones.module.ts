import { Module } from '@nestjs/common';
import { CancionesController } from "./Canciones.controller";
import { CancionesService } from "./Canciones.service";

@Module({
    controllers: [CancionesController],
    providers: [CancionesService],
})
export class CancionesModule {}
