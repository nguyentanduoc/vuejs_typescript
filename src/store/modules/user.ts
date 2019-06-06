import {Module, VuexModule, getModule} from 'vuex-module-decorators';
import store from '@/store';

@Module({
  namespaced: true,
  name: 'users',
  store,
})
class UsersModule extends VuexModule {

}

export default getModule(UsersModule);
