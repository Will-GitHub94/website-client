<template>
	<div>
		<Header :have-banner="true" page-title="Home"></Header>
		<div class="content">
			<p>
				Hey! My name is Will Ashworth <i>(although that probably seemed pretty obvious)</i>
			</p>
			<br />...
			<br />..
			<br />.
			<br />
			<p>
				Okay so quick intro...I'm a Software Engineer. &#x1f468; Yeeeeah pretty broad term...
				so I call myself a Software Engineer over a Dev for 2 reasons:
			</p>
			<ol>
				<li>That was my degree...</li>
				<li>And, I find people associate being a dev with just coding.
				I am sure that is not the case in the slightest but I still want to differentiate</li>
			</ol>
			<p>
				Anyway, I've wanted to create this site for a while but I kept getting side tracked
				<i>(yano how the dev world is...)</i>. At first glance youre probably thinking this
				is just another online CV...<b>wrong!!!
				</b><small><i>(Well right but thats not all...)</i></small>
			</p>
			<br />
			<p>This site consists of drum roll:</p>
			<ul>
				<li>Little bit about me which, yes, is the online CV part</li>
				<li>Cool projects I have worked on
				<small><i>(Was really hard to find cool ones)</i></small></li>
				<li>And a neat little section called Knowledge...<i>oooooooo</i></li>
			</ul>
			<br />
			<p>
				Okay so all that probably made sense but just going to touch on that Knowledge
				section a bit more...
			</p>
			<p>
				So I always here people complain that when they learn something new it ends up
				pushing out some other knowledge. <i>(That's the way the brain works...sorry)</i>
				So I thought could you have a place where you could store all of your knowledge
				you have acquired. Obviously not all of <b>life</b> knowledge as that would take
				forever and you would have probably cracked full AI by that point...
			</p>
			<br />
			<p>
				Nope... I mean knowledge in a professional sense... so I created a repo which holds
				all <i>(most)</i> of the knowledge I have acquired over my career.
			</p>
			<br />
			<p>
				I did this so I could maybe go back later in life and brush up on later in life
				like the algorithm for the current AES standard...never know when that'll be handy.
			</p>
			<br />
			<p>
				I'm waffling now... all of this is probably in the base README describing it just
				repeated it here so I actually have something to put on this page. Now...go browse!!!
				&#x1f60a;
			</p>
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
