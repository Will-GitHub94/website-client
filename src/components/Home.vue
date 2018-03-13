<template>
	<div>
		<Header :have-banner="true" page-title="Home"></Header>
		<div>
			<p>Hey! My name is Will Ashworth <i>(although that probably seemed pretty obvious)</i>
				<br>...
				<br>..
				<br>.
				<br>
				Okay so quick intro...I'm a Software Engineer </p>
		</div>
	</div>
</template>

<script>
	import Header from "./Header";

	export default {
		components: {
			Header,
		},
		name: "Home",
		data() {
			return {
				header: "Hello Vue!",
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
