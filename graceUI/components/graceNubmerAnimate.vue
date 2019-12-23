<template>
	<text>{{numAnimate}}</text>
</template>
<script>
export default{
	props:{
		num : {
			type : Number,
			default : 0
		},
		stepNumber : {
			type : Number,
			default : 50
		},
		timer : {
			type : Number,
			default : 800
		},
		keepInt : {
			type : Boolean,
			default : false
		}
	},
	data() {
		return {
			numAnimate : 0,
			intervalId : null
		}
	},
	created:function(){
		let timer = this.timer / this.stepNumber;
		let step  = Math.floor((this.num / this.stepNumber) * 100) / 100;
		this.intervalId = setInterval(() => {
			// 正值 
			if(this.num >= 0){
				if(this.numAnimate >= this.num){
					this.numAnimate = this.num;
					clearInterval(this.intervalId);
					return;
				}
			}else{
				if(this.numAnimate <= this.num){
					this.numAnimate = this.num;
					clearInterval(this.intervalId);
					return;
				}
			}
			let  res = this.numAnimate + step;
			this.numAnimate = this.keepInt ? parseInt(res) : Math.floor(res * 100) / 100;
		}, timer);
	}
}
</script>
<style scoped>
</style>
