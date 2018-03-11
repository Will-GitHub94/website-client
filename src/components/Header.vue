<template>
	<header>
		<b-jumbotron v-if="haveBanner">
			<img id="profile-pic" src="../assets/brand/profile-picture/503x503.jpg"/>
			<h1>{{ author }}</h1>
			<h2>{{ role }}</h2>
			<h6>{{ pageTitle }}</h6>
		</b-jumbotron>
		<b-nav id="main-nav">
			<b-nav-item>
				<router-link to="/about-me">About Me</router-link>
			</b-nav-item>
			<b-nav-item>
				<router-link to="/projects">Projects</router-link>
			</b-nav-item>
			<b-nav-item>
				<router-link to="/">
					<img id="logo" src="../assets/brand/logo/310x400.png"/>
				</router-link>
			</b-nav-item>
			<b-nav-item>
				<router-link to="/knowledge">Knowledge</router-link>
			</b-nav-item>
		</b-nav>
	</header>
</template>

<script>
	export default {
		name: "Header",
		props: {
			haveBanner: Boolean,
			pageTitle: String,
		},
		data() {
			return {
				author: "Will Ashworth",
				role: "Software Engineer",
			};
		},
	};
</script>

<style scoped>
	#main-nav {
		justify-content: center;
		border-bottom: 1px solid #afafaf;
	}
	#profile-pic {
		border-radius: 50%;
		box-shadow: 0 0 5px 6px #ccc;
	}
	#logo {
		height: 100px;
	}
</style>
