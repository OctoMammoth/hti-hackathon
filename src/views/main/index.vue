<template>
<div class="skeleton">
	<navbar text="Якутск"/>

	<div>
		тут блок бонусной программы
	</div>

	<carousel>
		<story :story="item" v-for="item in stories" :key="item.text"/>
	</carousel>

	<div class="ticket">
		<v-button type="active">
			Поиск билетов
		</v-button>
		<v-button type="disabled">
			Регистрация на рейс
		</v-button>
	</div>

	<carousel>
		<promo :promo="item" v-for="item in promos" :key="item.text"/>
	</carousel>

	<div class="activities">
		<div class="top">
			<v-button type="active flex">
				Смотреть
			</v-button>
			<v-button type="active flex">
				Аудио
			</v-button>
		</div>
		<div class="bottom">
			<v-button type="active flex">
				Читать
			</v-button>
		</div>
	</div>

</div>
</template>

<script>
import navbar from "@/components/navbar"
import carousel from "@/components/carousel"
import story from "@/components/story"
import promo from "@/components/promo"
import VButton from "@/components/v-button"

import { reactive } from "vue"

export default {
	setup() {
		const stories = reactive([
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
			{
				text: "Перевозка животных"
			},
		])

		const promos = reactive([
			{
				header: "Двойные мили",
				text: "2 мили Yakutia за каждые 20 руб."
			},
			{
				header: "Двойные мили",
				text: "2 мили Yakutia за каждые 20 руб."
			},
			{
				header: "Двойные мили",
				text: "2 мили Yakutia за каждые 20 руб."
			},
		])

		return {
			stories,
			promos
		}
	},
	components: {
		navbar,
		story,
		VButton,
		promo,
		carousel,
	}
}
</script>

<style lang="scss">
@import "./index";
</style>
