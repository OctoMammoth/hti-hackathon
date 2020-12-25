<template>
	<div class="story">
		{{ story.text }}
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