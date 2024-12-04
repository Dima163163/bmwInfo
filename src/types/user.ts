import { Status } from './status';

export type UserType = {
  name: string,
  id: string,
}

export type UsersData = UserType[]

export interface UserState {
  user: UserType;
  users: UsersData;
  status: Status;
  error: string | null;
}