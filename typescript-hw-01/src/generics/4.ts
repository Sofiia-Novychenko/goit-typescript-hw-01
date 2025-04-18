type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<TPartialUser extends Partial<User>>(
  initialValues: TPartialUser
) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
