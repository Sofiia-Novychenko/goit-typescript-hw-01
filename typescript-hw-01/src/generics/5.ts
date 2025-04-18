export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type TRoleDescription = Record<UserRole, string>;

const RoleDescription: TRoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
