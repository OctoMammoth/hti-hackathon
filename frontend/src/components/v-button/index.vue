<template>
	<span
		class="button">
		<span>
			<!-- В слот пихается то, что мы пишем внутри компонента во время его использования (смотреть views/main 6 строка) -->
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
				return "default type"
			},
			type: String
		}
	},
	setup(props) {
		console.log(props.type)
	}
	/*
		Теперь нажми на кнопку перейти в логин и открой views/login
	*/
}
</script>

<style lang="scss">
@import "./index";
</style>