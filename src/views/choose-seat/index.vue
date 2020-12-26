<template>
	<div class="choose-seat">
		<navbar text="Выбор места"/>
		<div class="plane">
			<img src="@/assets/images/plane.svg"/>
			<div class="seats">
				<div class="row" v-for="row in seats" v-bind:key="row.id">
					<div class="row">
						<div :class="['seat',seat]" v-for="seat in row.left" v-bind:key="seat" @click="select('left',row.id,seat)">
						</div>
					</div>
					<div>
						{{ row.id }}
					</div>
					<div class="row">
						<div :class="['seat',seat]" v-for="seat in row.left" v-bind:key="seat">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import { reactive } from "vue"

export default {
    setup() {
		function select(side, row, selectable) {
			if(selectable == "enabled") {
				alert("Готово")
			} else {
				alert("Место уже занято")
			}
		}

		const seats = reactive([
			{
				id: 1,
				left: [
					"disabled",
					"enabled"
				],
				right: [
					"disabled",
					"enabled"
				],
			},
			{
				id: 2,
				left: [
					"disabled",
					"enabled"
				],
				right: [
					"disabled",
					"enabled"
				],
			},
			{
				id: 3,
				left: [
					"disabled",
					"enabled"
				],
				right: [
					"disabled",
					"enabled"
				],
			},
			{
				id: 4,
				left: [
					"disabled",
					"enabled"
				],
				right: [
					"disabled",
					"enabled"
				],
			},
			{
				id: 5,
				left: [
					"disabled",
					"enabled"
				],
				right: [
					"disabled",
					"enabled"
				],
			},
		])
        return { seats, select }
    },
	components: {
		navbar,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>