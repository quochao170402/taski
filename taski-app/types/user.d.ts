interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}
