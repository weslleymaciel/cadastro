import AssetsStore from './assets.store';
import UserStore from './user.store';

class RootStore {
  userStore: UserStore;
  assetsStore: AssetsStore;

  constructor() {
    this.userStore = new UserStore();
    this.assetsStore = new AssetsStore();
  }
}

const store = new RootStore();

export { RootStore, UserStore, AssetsStore };

export default store;
