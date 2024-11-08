import { Injectable } from '@nestjs/common';
import { CancionesModel } from './canciones.model';

@Injectable()
export class CancionesService {
    MusicaList = []

    constructor() {
        const musica : CancionesModel = {
            id: 1,
            nombre: "No me olvides, ",
            artista: "La Beriso",
            album: "Historias",
        }
        this.MusicaList.push( musica);
    }

    getMusica() {
        return this.MusicaList
    }

    getMusicaById ( id:number ) {
        return this.MusicaList.find( m => m.id === id );
    }

    getMusicaByName (nombre: string) { 
        return this.MusicaList.find ( m => m.nombre === nombre)

    }  

    getMusicaByArtista (artista: string) { 
        return this.MusicaList.find( m => m.artista === artista);
    }
    postMusica( newmusica : CancionesModel ): string {
        this.MusicaList.push( newmusica );
        return newmusica.nombre;
    }

    putMusica( nuevosDatos: CancionesModel, musicaToUpdateId:number  ) : boolean {
        const musicaToUpdate : CancionesModel = this.MusicaList.find( m => m.id === musicaToUpdateId );
        if( musicaToUpdate != undefined ){
            musicaToUpdate.nombre = nuevosDatos.nombre;
            musicaToUpdate.artista = nuevosDatos.artista;
            return true;
        } else 
            return false;
    }

    deleteMusica( id:number ) : boolean {
        const indicemusicaAEliminar = this.MusicaList.findIndex( u => u.id === id );
        if( indicemusicaAEliminar == -1 )
            return false;
        this.MusicaList.splice( indicemusicaAEliminar, 1 );
        return true;
    }
}
