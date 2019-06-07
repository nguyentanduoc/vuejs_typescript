import {getModule, Module, Mutation, MutationAction, VuexModule} from 'vuex-module-decorators';
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
  public authentication: Authentication | null = null;
  public error: string | null = '';
  public hasErrored: boolean | null = false;

  @Mutation
  public setAuthentication(authentication: Authentication) {
    this.authentication = authentication;
  }

  get user() {
    return this.authentication && this.authentication.user || null;
  }

  get getError() {
    return this.error;
  }

  get gethasErrored() {
    return this.hasErrored;
  }

  @MutationAction
  public async login(userSubmit: UserSubmit) {
    return login(userSubmit)
      .then((authentication) => {
        return {authentication};
      }).catch((errorObject) => {
        const error = errorObject.response.data.debugMessage;
        return {error, hasErrored: true};
      });
  }
}

export default getModule(AuthenticationModule);
