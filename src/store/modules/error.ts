import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from '@/store';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'err',
  store,
})
export default class ErrorModule extends VuexModule {
  private isErrored: boolean | false | undefined;
  private message: string | '' | undefined;

  @Mutation
  public setHasError(message: string) {
    this.message = message;
    this.isErrored = true;
  }

  get getMessage() {
    return this.message;
  }
}
