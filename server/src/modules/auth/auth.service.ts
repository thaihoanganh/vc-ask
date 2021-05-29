import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validationUser(user: any) {
    const getUserByUsername: any = await this.usersService.findOne({
      username: user.username,
    });

    if (!getUserByUsername) {
      return null;
    }

    const isMatch = await bcrypt.compare(
      user.password,
      getUserByUsername.password,
    );

    if (isMatch) {
      return getUserByUsername;
    }

    return null;
  }

  async login(user: any) {
    const payload = { _id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
