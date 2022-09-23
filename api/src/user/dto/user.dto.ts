export class userDTO {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    type_user: string;
    role_user: role;
    created_at: Date;
  }

export enum role {
  ROLE_USER = 'USER',
  ROLE_ADMIN = 'ADMIN'
}