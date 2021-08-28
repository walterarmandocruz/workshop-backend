import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Bienvenidos a la segunda clase de Nest & Angular JS';
    }
}
