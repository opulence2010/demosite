
<template>

  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div 
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
		
	
			
				<div class="card">
				  <header class="card-header">
					<p class="card-header-title">
						<nuxt-link :to="{name:slide.pgLink}">{{ slide.title }}</nuxt-link>
					</p>
					<a href="#" class="card-header-icon" aria-label="more options">
					  <span class="icon">
						<i class="fas fa-angle-down" aria-hidden="true"></i>
					  </span>
					</a>
				  </header>
				  <div class="card-content">
					<div class="content">
						<nuxt-link :to="{name:slide.pgLink}"><img :src="slide.img" alt='' ></nuxt-link>
						
							<div class="textZone"> <nuxt-link :to="{name:slide.pgLink}"><blockquote>{{ slide.metin}} </blockquote></nuxt-link></div>
					</div>
				  </div>
				</div>
							
		


      </div>
    </transition-group>
	
   <div class='carousel-controls'>
   
		<div class="columns">
		  <div class="column">
		<a href="#" class='carousel-controls__button' @click="previous"><img src="http://209.182.217.195/carousel/left-arrow-small.png" alt="" /></a>
		  </div>
		  <div class="column">
			  <a href="#" class='carousel-controls__button' @click="next"><img src="http://209.182.217.195/carousel/right-arrow-small.png" alt="" /></a>
		  </div>
		 </div> 
  
  
  
      

    </div>
 
	
 </div>
 
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'Futures & Equities Trading Education',
          id: 1,
		  img:'http://209.182.217.195/carousel/education.png',
		  pgLink:'sliderpages-education',
		  metin:' >> STOCKS   >> FUTURES - Discover successful methods and time tested strategies developed over years of trading the markets that yield exceptional results in any market and market environments. Our methods are proven to pinpoint trading opportunities for high odds, low risk successful trades.'
		  
        },
        {
          title: 'Day-trading',
          id: 2,
		  img:'http://209.182.217.195/carousel/education.png',
		  pgLink:'sliderpages-daytrading',
		  metin:'This intensive class is the best Day Trading Course even designed. It is for  anyone who wants to learn how to actively swing trade and invest (actively, medium or long term) in the stock market. Whether you are and Active Investor, Hands On Investor or Laid Back Investor. Learn to profit  from every move, whether the market is going up or down. This course will help you generate consistent income.'  
        },
        {
          title: 'Payment Options',
          id: 3,
		  img:'http://209.182.217.195/carousel/installments.png',
		  pgLink:'sliderpages-paymentopts',
		  metin:'Payments are affordable  in convenient conditions.We also accept various payment options including credit cards,checks, money orders or bank wire transfers. Please contact our Customer Service for further deatils.'

        },
        {
          title: '﻿Live Personal Interactive Coaching',
          id: 4,
		  img:'http://209.182.217.195/carousel/coaching.png',
		  pgLink:'sliderpages-coaching',
		  metin:'If you have just started your trading career and want to speed up your learning process to transition faster to profitability, if you have been trading for more than 1 or 2 years and are you are not yet consistently profitable, if you feel the need for special undivided attention and someone that can answer ALL your specific questions then program is for you.'
        },
        {
          title: 'Live F U T U R E S Trading room',
          id: 5,
		  img:'http://209.182.217.195/carousel/tradingroom.jpg',
		  pgLink:'sliderpages-futuresroom',
		  metin:'Take control of your portfolio with our hand-holding trade alert signal service designed to make you money as you trade, earn and learn beside us. Precise entries, stops, targets and complete management for the life of the trade delivered to you in real time. All skill levels welcome.'
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
	margin-top:2em;
  // width: 24em;
 // min-height: 40em;
 
}
.slide {
  flex: 0 0 10em;
  // height: 30em;
  // margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  min-width:100%;
    max-height:45em;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

.slide img {

  width:100%;



}



.card-header {

  // margin-top:2em;
  

}




.carousel-controls {

margin-top:0.8em;


}

header  {

background-color:#F0E68C;
    color:siver
}

.card-header-title {

	margin-top:1.4em;
	margin-left:1.4em;
	font-weight:bold;
	font-size:150% !important;
	width:100%;


}



.card-content {

padding:0.5em;


}









.textZone{

    position: absolute;
    top: 50%;
    left: 20em;
	opacity:0.80;
	margin-right:2.5em;
	font-weight:bold;
	
	

}


.textZone a {

 color:purple !important;

}


</style>