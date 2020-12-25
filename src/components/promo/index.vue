<template>
	<div class="promo">	
		{{ promo.text }}
	</div>
</template>

<script>

export default {
	props: {
		promo: {
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