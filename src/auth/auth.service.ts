import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any> {
        let user = await this.userService.findByUsername(username);

        if (user && user.password === password) {
            let { password, ...result } = user;
            return result;
        }
        return null;
    }

    async createToken(user: any) {
        let payload = { username: user.username, sub: user.userId };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}
