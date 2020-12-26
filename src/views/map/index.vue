<template>
	<div class="search-ticket">
		<navbar text="Вы летите над"/>
		<!-- другое событие, список https://ru.vuejs.org/v2/guide/events.html -->
		<div class="text-field">
			<div class="imageFrame">
				<img src="@/assets/images/altai.png" alt=""/>
				<p>Золотые горы Алтая</p>
			</div>
		<p>Величественные горы Алтая — сложная система высочайших в Сибири хребтов, разделённых живоп
исными долинами рек и глубокими котловинами. Красивейшие вершины влекут путешественников и учёных, фотографов и паломников, многие горы — местные святыни.</p>
		<div class="flex">
			<v-button type="active plane">
				<div>Иркутск</div>
				<img src="@/assets/images/plane.png" alt=""/>
				<div>Алтай</div>
			</v-button>
		</div>
		<div class="flex">
			<v-button type="active plane">
				<div>Алтай</div>
				<img src="@/assets/images/plane.png" alt=""/>
				<div>Якутск</div>
			</v-button>
		</div>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import VButton from "@/components/v-button"

import { reactive } from "vue"

export default {
    setup() {
		const form = reactive({
			datepickerSetting: {
				id: "arrival",
				name: "дата вылета",
				value: "2020/12/26",
				placeholder: "Выбрать дату вылета",
				yearMinus: 0,
				fromDate: "2020/12/27",
				toDate: "2021/12/27",
				disabledDate: [
					"2020/12/30",
				],
				locale: {
					format: "YYYY/MM/DD",
					weekday: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					todayBtn: "Сегодня",
					clearBtn: "Очистить",
					closeBtn: "Закрыть",
				},
				changeEvent: (value) => {
					console.log(value + " selected!");
				},
				disableInput: false,
			}
		})

		return {
			form
		}
	},
	components: {
		navbar,
		VButton,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
