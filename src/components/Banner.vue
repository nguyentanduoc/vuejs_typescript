<template>
	<!-- banner -->
	<section class="banner">
		<!-- banner text -->
		<div class="container">
			<div class="banner_text_wthree_pvt">
				<h3 class="home-banner-w3">World Wide <br>Transportation</h3>
				<p class="bnr-txt">Lorem ipsum dolor sit amet,Stet clita kasd gubergren, Lorem ipsum dolor sit
					amet,Stet clita kasd gubergren,
				</p>
				<form action="#" method="post" class="d-flex serching-styles-w3pvt">
					<input type="search" class="serach-input" placeholder="Enter Your Track Id" name="search" required>
					<button class="btn bg-theme button-w3" type="button">Track Now</button>
				</form>
			</div>
		</div>
		<!-- //banner text -->
		<!-- banner-bottom -->
		<div class="banner-bottom-w3ls">
			<div class="container">
				<div class="row">
					<div class="col-sm-4 col-6">
						<div class="bb-img">
							<img src="images/a2.jpg" class="img-fluid img-thumbnail" alt=""/>
							<h3>caption goes here</h3>
						</div>
					</div>
					<div class="col-sm-4 col-6">
						<div class="bb-img">
							<img src="images/a1.jpg" class="img-fluid img-thumbnail" alt=""/>
							<h3>caption goes here</h3>
						</div>
					</div>
					<div class="col-sm-4 col-6 mx-auto mt-sm-0 mt-4">
						<div class="bb-img">
							<img src="images/a3.jpg" class="img-fluid img-thumbnail" alt=""/>
							<h3>caption goes here</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //banner-bottom -->
	</section>
	<!-- //banner -->
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Banner extends Vue {

  }
</script>
<style lang="scss">
</style>
