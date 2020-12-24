<template>
	<div class="parent">
		<h1>
			Добро пожаловать в команду
		</h1>
		<div class="text-field" @keyup.enter="submit">
			<!-- email уже будет заполнен, ведь значения реактивные! -->
			<input v-model="userStore.email" placeholder="Email">
			<input v-model="userStore.password" type="password" placeholder="Пароль">
			<input v-model="userStore.password_confirmation" type="password" placeholder="Повторно введите пароль">
			<span @click="reg(userStore.email)" class="button mb-3">
				Начать крутотень
			</span>
		</div>
	</div>
</template>

<script>
import useLogin from '@/composables/login'
import useStore from '@/store/user'

export default {
    setup() {
        const { reg } = useLogin() //импортим именно reg
		const { userStore } = useStore() //импортим store
		return { userStore, reg }
    }
}
</script>

<style scoped lang="scss">
@import "./index";
</style>
