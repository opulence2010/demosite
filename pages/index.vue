<!-- pages/index.vue -->

<template class="no-mode-absolute-demo-wrapper">
  <section class="hero">
  

    <div class="hero-body sliderHolder">
	
   
      <my-slider ></my-slider>

	 
	 </div>
	 
	 
	 
  </section>
</template>



<script> 

  import MySlider from '../components/MySlider'
 
  export default {
     components: {
      MySlider
    },

	
  }
</script>


<style scoped>

.sliderHolder {

	margin-top:0px;
	padding-top:0px;

}


.hero {

background-color:#99D9EA;


}




</style>