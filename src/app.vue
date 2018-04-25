<template>
	<div id="app">
		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>