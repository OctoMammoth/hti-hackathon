<template>
	<div class="switcher">
		{{ text }}
		<div class="switch">
			<label class="switch">
				<input type="checkbox">
				<span class="slider round"></span>
			</label>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		text: {
			type: String
		}
	},
	setup() {
	}
}
</script>

<style lang="scss">
@import "./index";
</style>