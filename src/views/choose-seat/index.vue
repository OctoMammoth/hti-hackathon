<template>
	<div class="choose-seat">
		<navbar text="Выбор места"/>
		<div class="plane">
			<img src="@/assets/images/plane.svg"/>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/navbar"

export default {
    setup() {
        return { }
    },
	components: {
		navbar,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>