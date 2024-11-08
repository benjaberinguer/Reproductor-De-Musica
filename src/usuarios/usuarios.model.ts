import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelTsService {}

export class usuario {
    id : number
    nombre : string
    apellido : string
  }