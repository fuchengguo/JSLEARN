import Vue from "vue";
import echarts from 'echarts'
import index from "./components/index.vue";

var app = new Vue({
	el:"#demo",
	data:{
		messege:"woshishei"
	},
	template:`<index></index>`,
	components:{
		index
	}
})

