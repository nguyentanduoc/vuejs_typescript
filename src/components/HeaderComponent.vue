<template>
	<header id="home">
		<div class="container">
			<div class="header d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1">
				<!-- logo -->
				<div id="logo">
					<h1><a href="index.html">Freight</a></h1>
				</div>
				<!-- //logo -->
				<!-- nav -->
				<div class="nav_w3ls ml-lg-5">
					<nav>
						<label for="drop" class="toggle">Menu</label>
						<input type="checkbox" id="drop"/>
						<ul class="menu">
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About Us</a></li>
							<li><a href="portfolio.html">Portfolio</a></li>
							<li>
								<!-- First Tier Drop Down -->
								<label for="drop-2" class="toggle toogle-2">Dropdown
									<span class="fa fa-angle-down" aria-hidden="true"></span>
								</label>
								<a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
								<input type="checkbox" id="drop-2"/>
								<ul>
									<li><a href="#blog" class="drop-text">Blog</a></li>
									<li><a href="single.html" class="drop-text">Single Page</a></li>
									<li><a href="#services" class="drop-text">Services</a></li>
									<li><a href="#more" class="drop-text">More</a></li>
								</ul>
							</li>
							<li>
								<a href="contact.html">Contact Us</a>
							</li>
							<li class="ml-xl-5 ml-lg-2 mt-lg-0 mt-sm-4 mt-3" v-if="!user">
								<router-link to="/login">Login</router-link>
							</li>
							<li class="ml-xl-5 ml-lg-2 mt-lg-0 mt-sm-4 mt-3" v-else>
								{{user.username}}
							</li>
						</ul>
					</nav>
				</div>
				<!-- //nav -->
			</div>
		</div>
	</header>
	<!-- //header -->
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator';
  import authentication from '../store/modules/authentication';

  @Component
  export default class HeaderComponent extends Vue {
    get user() {
      return authentication.user;
    }
  }
</script>

<style scoped>

</style>
