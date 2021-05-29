import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Public } from 'src/shared/decorators/auth.decorator';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() userLoginDto: UserLoginDto) {
    const user = await this.authService.validationUser(userLoginDto);

    if (!user) {
      throw new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    const authLogin = await this.authService.login(user);

    return {
      success: true,
      statusCode: 200,
      data: {
        _id: user.id,
        username: user.username,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
        ...authLogin,
      },
    };
  }
}
