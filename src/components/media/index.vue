<template>
	<div class="media">
		<div class="media-image">
			<img :src="getImgUrl(source)"/>
		</div>
		<div class="media-text">
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		text: {
			type: String
		},
		source: {
			type: String
		},
	},
	setup() {
		function getImgUrl(pic) {
			return require('./assets/'+pic)
		}
		return {
			getImgUrl
		}
	}
}
</script>

<style lang="scss">
@import "./index";
</style>