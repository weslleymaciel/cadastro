import UserStore from './user.store';

class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}

const store = new RootStore();

export { RootStore, UserStore };

export default store;
