import { ApiProperty, PickType } from '@nestjs/swagger';

import { User } from '../entities/user.entity';
import { IsStrongPassword } from 'class-validator';

export class CreateUserDto extends PickType(User, [
  'email',
  'password',
  'username',
  'avatar',
  'about',
] as const) {
  @ApiProperty({
    description: 'пароль пользователя',
    example: 'Qwerty1234!',
  })
  @IsStrongPassword()
  public password: string;
}
