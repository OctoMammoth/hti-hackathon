<template>
	<div class="story">
		<div class="story-image">
			<img src="@/assets/images/covid.png"/>
		</div>
		<div class="story-text">
			{{ story.text }}
		</div>
	</div>
</template>

<script>

export default {
	props: {
		story: {
			type: Object
		}
	},
	setup() {
	}
}
</script>

<style lang="scss">
@import "./index";
</style>