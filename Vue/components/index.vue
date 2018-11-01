<template>
	<div>{{name}}</div>
	<div id="char"></div>
</template>

<script>
	export default {
		data(){
			return {
				name:"fcg"
				
			}
		},
		mounted(){
			
		},
		methods:{
		
		}

      
	}
</script>

<style>
#char{
	width: 500px;
	height: 500px;
}
	div{
		width: 200px;
		height: 200px;
		text-align: center;
		line-height: 200px;
		font-size: 20px;
		border: 1px solid darkgoldenrod;
	}
</style>