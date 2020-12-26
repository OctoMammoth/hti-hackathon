<template>
<div class="navbar">
	<div class="flex">
		<div class="city">
			{{ text }}
		</div>
		<div class="notifications">
			aa
		</div>
	</div>
	<div class="menu">
		<div class="flex">
			<div class="profile">
				<div class="menu-button">
					<img src="@/assets/images/avatar.webp"/>
				</div>
				<div>
					<h5>
						Иван
					</h5>
					<a>
						2387 миль
					</a>
				</div>
			</div>
		</div>
		<div>
			<div class="menu-button">
				Чат
			</div>
			<div class="menu-button">
				Настройки
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {
	props: {
		text: {
			type: String,
			default() {
				return "Якутск"
			}
		}
	},
	setup() {
	}
}
</script>

<style lang="scss">
@import "./index";
</style>