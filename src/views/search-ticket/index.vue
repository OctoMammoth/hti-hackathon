<template>
	<div class="search-ticket">
		<navbar text="Ищу билет"/>
		<h1>
			дарова
		</h1>
		<!-- другое событие, список https://ru.vuejs.org/v2/guide/events.html -->
		<div class="text-field">
			<input placeholder="Откуда"> 
			<!-- v-model это как бы value -->
			<input placeholder="Куда"> 
			<!-- реактивное значение placeholder -->
			<datepicker 
				:id-attr="form.datepickerSetting.id"
				:name-attr="form.datepickerSetting.name"
				:value-attr="form.datepickerSetting.value"
				:placeholder-attr="form.datepickerSetting.placeholder"
				:year-minus="form.datepickerSetting.yearMinus"
				:from="form.datepickerSetting.fromDate"
				:to="form.datepickerSetting.toDate"
				class-attr="datepicker"
				:disabled-date="form.datepickerSetting.disabledDate"
				:locale="form.datepickerSetting.locale"
				@value-changed="form.datepickerSetting.changeEvent"
				:disableInput="form.datepickerSetting.disableInput"
			></datepicker>
			<switcher text="Односторонний полет"/>
			<switcher text="С багажом"/>
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
import datepicker from 'vue3-datepicker-lite'
import switcher from '@/components/switcher'

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
		datepicker,
		switcher,
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
