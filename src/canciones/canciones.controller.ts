import { Controller,Get,Post,Param,Body,Delete,Put } from '@nestjs/common';
import { CancionesService } from "./canciones.service";
import {CancionesModel}  from "./canciones.model";


@Controller('canciones')
export class CancionesController {
    constructor (private readonly CancionesService: CancionesService) {}

    @Get()
    getCanciones() {
        return this. CancionesService.getMusica();
    }

    @Get(':id')
    getCancionesById( @Param('id') id:string ) {
        return this.CancionesService.getMusicaById( Number( id ) );
    }
    
    @Get('/name/:name')
    getCancionesByName( @Param('name') name:string ) {
        return this.CancionesService.getMusicaByName( name );
    }
    @Get('/artist/:artista')
    getCancionesByArtista( @Param('artista') artista:string ) {
        return this.CancionesService.getMusicaByArtista( artista );
    }
    @Post() 
    postCanciones (@Body() newCanciones:CancionesModel) {
        return this.CancionesService.postMusica( newCanciones );
    }
        
    @Put(":id")
    putCanciones( @Body() putCanciones, @Param("id") id:string ): boolean {
        return this.CancionesService.putMusica( putCanciones, Number(id) );
    }

    @Delete(":id")
    deleteCanciones( @Param("id") id:string) : boolean {
        return this.CancionesService.deleteMusica ( Number(id) );
    }
}
