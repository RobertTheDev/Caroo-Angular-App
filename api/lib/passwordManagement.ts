import { compare, hash } from 'bcryptjs';

// Hash password using bcryptjs.
export const hashPassword = async (password: string) => {
  return await hash(password, 10);
};

// Compare two passwords using bcryptjs.
export const verifyPassword = async (
  inputPassword: string,
  password: string,
) => {
  return await compare(inputPassword, password);
};
