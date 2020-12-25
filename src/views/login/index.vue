<template>
	<div class="parent">
		<h1>
			дарова
		</h1>
		<!-- другое событие, список https://ru.vuejs.org/v2/guide/events.html -->
		<div class="text-field" @keyup.enter="submit">
			<input v-model="userStore.email" placeholder="Email"> 
			<!-- v-model это как бы value -->
			<input v-model="userStore.password" type="password" :placeholder="custom_password_text"> 
			<!-- реактивное значение placeholder -->
			<span @click="login" class="button mb-3">
				войти
			</span>
		</div>
	</div>
</template>

<script>
import useLogin from '@/composables/login'
import useStore from '@/store/user'
import { ref } from 'vue'


export default {
    setup() {
		const { login } = useLogin() // можем импортить только что-то одно, например только функцию login. если взглянуть на '@/composables/login', то вдидно что там есть всякое, а забираем мы только login

		const { userStore } = useStore() //импортим store

		const custom_password_text = ref('text you like')

        return { userStore, login, custom_password_text }
    }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
