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
		</div>
		<v-button @click="login" type="active">
			Найти
		</v-button>
	</div>
</template>

<script>
import navbar from "@/components/navbar"
import VButton from "@/components/v-button"


export default {
    setup() {
	},
	components: {
		navbar,
		VButton
	}
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
