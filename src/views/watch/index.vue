<template>
	<div class="watch">
		<navbar text="Sakha Movie"/>
		<div class="skeleton">
			<div class="movies">
				<media v-for="item in medias" :text="item.text" :source="item.source" v-bind:key="item.id"/>
			</div>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import media from "@/components/media"
import { reactive } from "vue"

export default {
    setup() {
		const medias = reactive([
			{
				text: "Джокер (18+)",
				source: "images/poster.jpg",
				id: 0,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 1,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 2,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 3,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 3,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 3,
			},
			{
				text: "Жокер",
				source: "images/poster.jpg",
				id: 3,
			},
		])

		return {
			medias
		}
    },
	components: {
		navbar,
		media,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>