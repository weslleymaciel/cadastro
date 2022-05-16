import { UserApi } from '../api';
import { action, observable, persist } from '../modules';

export default class UserStore {
  @observable
  user: User = {} as User;

  @persist('list')
  @observable
  users: User[] = [];

  @action
  getUser = async (id: string): Promise<void> => {
    this.user = await UserApi.getUser(id);
  };

  @action
  getUsers = async (): Promise<void> => {
    this.users = await UserApi.getUsers();
  };

  @action
  updateUser = async (): Promise<void> => {
    await UserApi.updateUser(this.user);
  };

  @action
  removeUser = async (): Promise<void> => {
    await UserApi.removeUser(this.user.id);
  };

  @action
  registerUser = async (): Promise<void> => {
    await UserApi.registerUser(this.user);
  };
}
