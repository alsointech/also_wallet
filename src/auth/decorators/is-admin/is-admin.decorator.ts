import { SetMetadata } from '@nestjs/common';

import { Role } from 'src/auth/models/roles.models';

export const ROLES = 'roles'

export const IsAdmin = (...roles: Role[]) => SetMetadata(ROLES, roles);
