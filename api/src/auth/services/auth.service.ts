import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, enteredPassword: string): Promise<any> {
    const user = await this.userService.findBy({ email: email });

    // Si l'utilisateur n'est pas trouvé, lève une exception.
    if (!user || user.length === 0) {
      throw new NotAcceptableException('Invalid email or password.');
    }

    const passwordValid = await bcrypt.compare(
      enteredPassword,
      user[0].password,
    );

    // Si le mot de passe ne correspond pas, lève une exception.
    if (!passwordValid) {
      throw new NotAcceptableException('Invalid email or password.');
    }

    // Renvoie une version filtrée de l'objet utilisateur.
    const { password, ...safeUser } = user[0];
    return safeUser;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      first_name: user.first_name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
