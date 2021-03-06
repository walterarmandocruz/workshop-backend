import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'walter',
            database: 'workshop',
            autoLoadEntities: true,
            synchronize: true,
            logging: true
        }),
        UserModule,
        AuthModule,
        RoleModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule { }
