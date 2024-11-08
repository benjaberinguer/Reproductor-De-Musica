import { Injectable } from '@nestjs/common';
import { usuario } from "./usuarios.model";

@Injectable()
export class UsuariosService {
    usuariosList = []

    constructor() {
        const usuario : usuario = {
            id: 1,
            nombre: "Adrian",
            apellido: "Lopez",
            
        }
        this.usuariosList.push( usuario );
    }

    getUsuarios () {
        return this.usuariosList
    }

    getUsuarioById ( id:number ) {
        return this.usuariosList.find( u => u.id === id );
    }

    postUsuario( newuser : usuario ) {
        this.usuariosList.push( newuser );
        return newuser ;
    }

    putUsuario( nuevosDatos: usuario, usuarioToUpdateId:number ) : boolean {
        const usuarioToUpdate : usuario = this.usuariosList.find( m => m.id === usuarioToUpdateId );
        if( usuarioToUpdate != undefined ){
            usuarioToUpdate.nombre = nuevosDatos.nombre;
            usuarioToUpdate.apellido = nuevosDatos.apellido;
           
            return true;
        } else 
            return false;
    }

    deleteUsuario( id:number ) : boolean {
        const indiceUsuarioAEliminar = this.usuariosList.findIndex( u => u.id === id );
        if( indiceUsuarioAEliminar == -1 )
            return false;
        this.usuariosList.splice( indiceUsuarioAEliminar, 1 );
        return true;
    }
}

