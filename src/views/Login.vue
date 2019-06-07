<template>
	<!-- login  -->
	<div class="modal-body align-w3">
		<div class="alert alert-danger" role="alert" v-if="loginError.length > 0">
			{{loginError}}
		</div>
		<form action="#" method="post" class="p-sm-3" @submit.prevent="login">
			<div class="form-group">
				<label for="recipient-name" class="col-form-label">Username</label>
				<input v-model="usernameOrEmail" type="text" class="form-control" placeholder="your name" name="Name"
				       id="recipient-name" required="">
			</div>
			<div class="form-group">
				<label for="password" class="col-form-label">Password</label>
				<input v-model="password" type="password" class="form-control" placeholder="*****" name="Password" id="password"
				       required="">
			</div>
			<div class="right-w3l">
				<input type="submit" class="form-control bg-theme" value="Login">
			</div>
			<div class="row sub-w3l my-3">
				<div class="col-sm-6 sub-w3layouts_hub">
					<input type="checkbox" id="brand1" value="">
					<label for="brand1" class="text-secondary">
						<span></span>Remember me?</label>
				</div>
				<div class="col-sm-6 forgot-w3l text-sm-right">
					<a href="#" class="text-secondary">Forgot Password?</a>
				</div>
			</div>
			<p class="text-center dont-do text-secondary">Don't have an account?
				<a href="register.html" class="text-theme-2 font-weight-bold">
					Register Now</a>
			</p>
		</form>
	</div>
	<!-- //login -->
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import authentication from '@/store/modules/authentication';
import UserSubmit from '@/typescript/userSubmit';

@Component
export default class Login extends Vue {
  public usernameOrEmail: string;
  public password: string;
  public loginError: string;

  constructor(props: object) {
    super(props);
    this.usernameOrEmail = '';
    this.password = '';
    this.loginError = '';
  }

  public async login() {
    const userSubmit = new UserSubmit();
    userSubmit.usernameOrEmail = this.usernameOrEmail;
    userSubmit.password = this.password;
    await authentication.login(userSubmit);
    if (authentication.gethasErrored && authentication.getError) {
      this.loginError = authentication.getError;
    } else {
      this.$router.push('/');
    }
  }

  // login() {
  //   const userSubmit = new UserSubmit();
  //   userSubmit.usernameOrEmail = this.usernameOrEmail;
  //   userSubmit.password = this.password;
  //   authentication.login(userSubmit).then(() => {
  //     this.$router.push('/');
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }
}
</script>
<style lang="scss">
</style>
