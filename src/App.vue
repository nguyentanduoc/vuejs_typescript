<template>
	<div id="app">
		<HeaderComponent></HeaderComponent>
		<!--<div id="nav">-->
		<!--<router-link to="/">Home</router-link> |-->
		<!--<router-link to="/about">About</router-link>-->
		<!--</div>-->
		<router-view/>
		<Footer></Footer>
	</div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components: {
      HeaderComponent,
      Footer,
    },
  })
  export default class App extends Vue {

  }
</script>
<style lang="scss">
</style>
