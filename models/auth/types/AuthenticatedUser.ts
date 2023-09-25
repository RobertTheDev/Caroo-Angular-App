export default interface AuthenticatedUser {
  emailAddress: string;
  firstName: string;
  lastName: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  avatar: string | null;
  emailVerified: Date | null;
}
