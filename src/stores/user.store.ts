import { UserApi } from '../api';
import { action, observable, persist } from '../modules';

export default class UserStore {
  @persist('object')
  @observable
  user: User = {} as User;

  @action
  getUser = async (id: string): Promise<void> => {
    this.user = await UserApi.getUser(id);
  };
}
