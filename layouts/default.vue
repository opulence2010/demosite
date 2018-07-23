<!-- layouts/default.vue -->

<template class="appTemplate">

  <div>

    
  
  
  
  <!-- ///////////////////////////// V-IF ////////////////////////////////    LANDING PAGE -->
  
  <div v-if="!isLanding">
  
	
	
				<section class="hero landingContainer">
				  <div class="hero-body">
				  
				  <nav>
				  
						<div class="level-right">

							<p class="level-item"><a href="#" class="navbar-item button is-info btnLogin" @click="goLogin" >Login</a></p>
							<p class="level-item"><a href="#" class="navbar-item button is-success btnLogin"  @click="goSignUp">Sign up</a></p>
							
						</div>
				  </nav>
				  
				  
					<div class="container">
					  <h1 class="title">
						<blockquote class="clsQuote">
						“The market is a device for transferring money 
						</blockquote>
						<blockquote class="clsQuote">
						from the impatient to the patient.”
						</blockquote>
					  </h1>
					  
					  <h2 class="subtitle clsAuthor">
						- Warren Buffet -
					  </h2>
					</div>
					
					<div>
					
						<div class="columns">
							<div class="column is-10">
								<img alt="" src="http://209.182.217.195/carousel/utilimgs/lanpgpic.png" />
							</div>
							<div class="column is-2">
								<img id="dwnarrow" src="http://209.182.217.195/carousel/utilimgs/dwn_arrow.png">
								
								<div><a class="button is-danger is-rounded clsLeanMore" href="#" @click="learnMore">Learn More</a></div>
							</div>
						</div>			
					</div>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				  </div>
				</section>
	
	



  </div>
  <div v-else>
	
	
	<!-- ////////////////////////V-ELSE ////////////////////////   MAIN APPLICATION -->
	


		  <div class="mainDiv">
			<navbar></navbar>

			<nuxt/>

			



		  </div>
		  
		  <footer v-show="isLanding" class="footer">
			<div class="content has-text-centered">
			  <p>

				  <strong>This web site is designed by Junate E.</strong>  
			
			  </p>
				
				
			  <p>The source code is licensed - 2018 </p>
				
			  <br/><br />
			
			</div>
		  </footer>
			
			
			
	
	
	</div>
	
	
	
	
	
  </div>
</template>

<script>
  
  import 'bulma/css/bulma.css'
  
  import Navbar from '../components/Navbar'

  import $ from 'jquery'
  
  
  export default {
    components: {
      Navbar
    },
	
   /* watch: {
      $route(to, from) {
        console.log('route path:',$nuxt.$route.name);
		
		if($nuxt.$route.name==='contact'){$('.navbar').css('display','block')};
		
		
      }
    },*/
	
	
	
	data (){
	
	  return {
	  
	  
	    isLanding:false
	  
	  }
	
	
	},
	
	mounted () {
	$('body').css('display','block');
	$('.landingContainer').css('background-color','#0F6BC2');
	$('.landingContainer').slideDown(1000);
	
	
	},
	methods:{
	
	  learnMore() {
	    this.isLanding=true;
	 	this.$router.push('/');
		
	  
	  },
	  
	  
	 
	 goLogin() {
	    this.isLanding=true;	 
	 	this.$router.push('/login/signup');
	 },
	 
	 
	 goSignUp () {
	 	this.isLanding=true;
		this.$router.push('/login/login');
	 
	 },
	 
	
	},


}
</script>

<style>
  html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
  
  body {
  background-color:#99D9EA !important;

position:fixed !important;
position:absolute;
top:0;
right:0;
bottom:0;
left:0;


  }


body {

  display:none;


}


.footer {

background-color:#B0C4DE;


}

  
  .mainDiv {
  
	background-color:#f80 !important;
	color:white;
	font-weight:bold;
	min-height:750px;

  
  
  }
  
  .landingContainer{
	  width:100%;
	  height:100%;
	  display:none;
	  
	  
  
  }
  
  
  .clsQuote {
  
  
	font-size: 96px;
    font-size: 2.625rem;
    line-height: 2.95rem;
    font-weight: 900;
    font-style: italic;
    font-family: "cheltenham-italic-700",georgia,"times new roman",times,serif;
    letter-spacing: .01em;
	color:silver;
  
  }
  
  
  
  .clsAuthor {
    color:#FFCE33;
  
  }
  
  
  .btnLogin,.btnSignup {
  
  
    width:5em;
  
  }
  
  
  
  .clsLeanMore {
   margin-top:1em;
    width:10em;
	height:3.5em;
	line-height: 2.95rem;
    font-weight: 900;
    font-style: italic;
   letter-spacing: .01em;
  }
  
  
  
  #dwnarrow {
  margin-left:3em;
  
  }
  
  
  
  //////DPWN ARRPW MOVE////
  
  @-webkit-keyframes arrow-jump {
	  0%   { opacity: 0;}
	  100% { opacity: 1; 
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-0-transform: translateY(10px);
			transform: translateY(10px);
		}
	  
	}
	
 @keyframes arrow-jump {
	  0%   { opacity: 0;}
	  100% { opacity: 1; 
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-0-transform: translateY(10px);
			transform: translateY(10px);
		}
	  
	}	
	
	
	#dwnarrow {
	  -webkit-animation: arrow-jump 1s infinite; /* Safari 4+ */
	  -moz-animation:    arrow-jump 1s infinite; /* Fx 5+ */
	  -o-animation:      arrow-jump 1s infinite; /* Opera 12+ */
	  animation:         arrow-jump 1s infinite; /* IE 10+, Fx 29+ */
	}


  
  
  //////page transition///////////////
  
  
.page-enter-active {
  animation: acrossIn .95s ease-in both;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
} 

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%,0, 0);
  }
  100% {
    transform: translate3d(0,0,0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}






  
</style>