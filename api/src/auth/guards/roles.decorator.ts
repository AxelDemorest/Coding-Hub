import { SetMetadata } from '@nestjs/common';
import { role } from '../../entities/user/models/user.dto';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: role[]) => SetMetadata(ROLES_KEY, roles);