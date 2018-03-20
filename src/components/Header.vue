<template>
	<header>
		<b-jumbotron id="head-jumbo" v-if="haveBanner">
			<img id="profile-pic" src="/static/brand/profile-picture/503x503.jpg"/>
			<h1>{{ author }}</h1>
			<h2>{{ role }}</h2>
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
					<img id="logo" src="/static/brand/logo/310x400.png"/>
				</router-link>
			</b-nav-item>
			<b-nav-item>
				<router-link to="/knowledge">Knowledge</router-link>
			</b-nav-item>
		</b-nav>
		<div>
			<h1>{{ pageTitle }}</h1>
		</div>
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
		margin-bottom: 75px;
	}
	#profile-pic {
		border-radius: 50%;
		box-shadow: 0 0 5px 6px #ccc;
		margin-bottom: 30px;
	}
	#head-jumbo {
		margin-bottom: 0;
		padding-bottom: 40px;
	}
	#logo {
		height: 100px;
	}
</style>
