<template>
	<div class="promo">
		<div class="blacker">
		</div>
		<div class="promo-image">
			<img src="@/assets/images/hotel.jpg"/>
		</div>
		<div class="promo-text">
			<h3>{{ promo.header }}</h3>
			<p>{{ promo.text }}</p>
		</div>
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