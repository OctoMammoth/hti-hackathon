<template>
	<span
		:class="['button', props.type]">
		<span>
			<slot name="default"></slot>
		</span>
	</span>
</template>

<script>

export default {
	/*
		props - то, что мы получаем извне. в зависимости от этих
		значений можно как-либо менять компонент - менять классы или текст.
		Мы передали type в views/main в одну из кнопок. если не передать, то будет
		возвращаться default type
	*/
	props: {
		type: {
			default() {
				return "disabled"
			},
			type: String
		}
	},
	setup(props) {
		return {
			props
		}
	}
	/*
		Теперь нажми на кнопку перейти в логин и открой views/login
	*/
}
</script>

<style lang="scss">
@import "./index";
</style>