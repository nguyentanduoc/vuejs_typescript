import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from '@/store';
import Authentication from '@/typescript/authentication';
import UserSubmit from '@/typescript/userSubmit';
import {login} from '@/api/authenticationApi';

@Module({
  namespaced: true,
  name: 'authentication',
  store,
  dynamic: true,
})
class AuthenticationModule extends VuexModule {
  private authentication: Authentication | null = null;

  @Mutation
  public setAuthentication(authentication: Authentication) {
    this.authentication = authentication;
  }

  get user() {
    return this.authentication && this.authentication.user || null;
  }

  @Action({commit: 'setAuthentication'})
  public async login(user: UserSubmit) {
    login(user).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
  }
}

export default getModule(AuthenticationModule);
