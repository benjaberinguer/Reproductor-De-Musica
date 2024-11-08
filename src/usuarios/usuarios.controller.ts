import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { UsuariosService } from "./usuarios.service";
import { usuario} from "./usuarios.model";

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly service: UsuariosService ) {}

    @Get()
    getusuarios() {
        return this.service.getUsuarios();
    }

    @Get(':id')
    getusuariosById( @Param('id') id:string ) {
        return this.service.getUsuarioById( Number( id ) );
    }
    
    @Post() 
    postusuarios (@Body() newusuario : usuario) {
        return this.service.postUsuario( newusuario );
    }
        
    @Put( ":id" )
    putusuario( @Body() nuevosDatos : usuario, @Param("id") id:string ): boolean {
        return this.service.putUsuario( nuevosDatos, Number(id) );
    }

    @Delete(":id")
    deletusuario( @Param("id") id:string) : boolean {
        return this.service.deleteUsuario( Number(id) );
    }
}
