<template>
  <transition name="fade">
	<div v-if="state.showContent">
		это главная
		<v-button type="super type">
			<router-link to="/login">перейти в логин</router-link>
		</v-button>
	</div>
  </transition>
	<!--Наверху - использование кастомной анимации и скрытие/показ элемента -->
	<v-button @click="toggleContent"> <!-- кастомный элемент с функцией по клику -->
		Поиграться с анимацией
	</v-button>
</template>

<script>
import VButton from "@/components/v-button" //импорт компонента
import { onMounted, reactive } from "vue" //импортим то, что нужно от view

//import router from '@/router'

export default {
	setup() {
		const state = reactive({ //Создаем реактивный объект, рекоменду. юзать константы
			showContent: true
		})
		function toggleContent () { // функция показа/скрытия элемента
			state.showContent = !state.showContent
		}
		onMounted(() => { // Событие lifecycle hooks когда страница замаунтилась
			//router.push('/demo/user-goal')
			console.log('mount')
		})
		return { //Кидаем данные в шаблон 
			toggleContent,
			state
		}
	},
	components: {
		VButton, //Регистрируем компонент
	}
	/*
		Теперь перейди в components/v-button
	*/
}
</script>
