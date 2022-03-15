import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput';

export const validateRegister = (
  options: UsernamePasswordInput
) => {
  if (!options.email.includes('@')) {
    return {
      errors: [
        {
          field: 'email',
          message: 'invalid email format'
        }
      ]
    };
  }

  if (options.username.includes('@')) {
    return {
      errors: [
        {
          field: 'username',
          message: 'cannot include @ sign'
        }
      ]
    };
  }

  if (options.username.length <= 2) {
    return {
      errors: [
        {
          field: 'username',
          message: 'length must be grater than 2'
        }
      ]
    };
  }

  if (options.password.length <= 2) {
    return {
      errors: [
        {
          field: 'password',
          message: 'length must be grater than 3'
        }
      ]
    };
  }
};
