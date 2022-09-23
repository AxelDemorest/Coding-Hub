import { SetMetadata } from '@nestjs/common';
import { role } from '../../user/dto/user.dto';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: role[]) => SetMetadata(ROLES_KEY, roles);