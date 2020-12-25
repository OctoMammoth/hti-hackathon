<template>
<div>
	<navbar/>

	<div>
		тут блок бонусной программы
	</div>
	<carousel>
		<story :story="item" v-for="item in stories" :key="item.text"/>
	</carousel>

	<div class="ticket">
		<v-button type="active">
			билет: поиск и покупка
		</v-button>
		<v-button type="disabled">
			Регистрация на рейс
		</v-button>
	</div>

	<carousel>
		<promo :promo="item" v-for="item in promos" :key="item.text"/>
	</carousel>

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
			}
		])

		const promos = reactive([
			{
				text: "Двойные мили"
			}
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
