<template>
	<div class="search-ticket">
		<navbar text="Регистрация на рейс"/>
		<!-- другое событие, список https://ru.vuejs.org/v2/guide/events.html -->
		<div class="text-field">
			<input placeholder="Фамилия"> 
			<!-- v-model это как бы value -->
			<input placeholder="№Брони/Билета"> 
			<!-- реактивное значение placeholder -->
		</div>
		<div class="flex">
			<v-button type="active">
				Найти
			</v-button>
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
