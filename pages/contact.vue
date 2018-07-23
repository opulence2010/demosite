<!-- pages/about.vue -->

<template>




    
 <div class="container">    
	<div class="divSpacerUp"></div>
	<div class="clsContactHeader"><h1 id="contactFrm" class="title is-3">Contact Us</h1></div>
	
	
	
		<div class="columns clsContactForm">
				  <div class="column is-2">

					<div>  <img alt="" src="http://209.182.217.195/carousel/utilimgs/custservice.png" > </div>




				  </div>
				  
				  
				  <div class="column is-6 is-primary">
				  
				  
					
					

									<div class="field">
									  <label class="label">Name</label>
									  <div class="control">
										<input class="input" type="text" placeholder="Text input">
									  </div>
									</div>


									<div class="field">
									  <label class="label">Email</label>
									  <div class="control has-icons-left has-icons-right">
										<input class="input is-danger" type="email" placeholder="Email input" value="">
										<span class="icon is-small is-left">
										  <i class="fas fa-envelope"></i>
										</span>
										<span class="icon is-small is-right">
										  <i class="fas fa-exclamation-triangle"></i>
										</span>
									  </div>
									  <p class="help is-danger">This email is invalid</p>
									</div>

									<div class="field">
									  <label class="label">Subject</label>
									  <div class="control">
										<div class="select">
										  <select>
										  <option>General Inquiry</option>
											<option>Subscription</option>
											<option>Billing</option>
											<option>Other</option>
										  </select>
										</div>
									  </div>
									</div>

									<div class="field">
									  <label class="label">Message</label>
									  <div class="control">
										<textarea class="textarea" placeholder="Textarea"></textarea>
									  </div>
									</div>

									<div class="field is-grouped">
									  <div class="control">
										<button class="button is-link" @click="handleSubmit" >Submit</button>
									  </div>
									  <div class="control">
										<button class="button is-text" @click="goHome" >Cancel</button>
									  </div>
									</div>



	



				  </div>
				  
		
		  
				 <div class="column is-4">
				   
							<div v-show="isSubmitClicked" class="notification is-primary">
							  <button class="delete" @click="gizleAlert"></button>
							   <p class="is-4"> Hold on!</p>
							  <p> This is just a <strong class="clsDemo" >D e m o </strong> , bro! </p>
							  <p>Be paitient,we'll do it in a short time</p>
							  
							</div>
				   
				</div>

				  
				  
				  

		</div>
	
	  <div class="divSpacerDown"></div>		
	</div>  
	


  
  
  </template>


  <script>
  
  import 'bulma/css/bulma.css'
  
  


  export default {
    
	
	data () {
	
		return {
		
			isSubmitClicked:false
		
		
		}
	
	
	
	},
	methods :{
		handleSubmit() {
		
		  this.isSubmitClicked=true;
		
		},
		
		gizleAlert() {
		
			this.isSubmitClicked=false;
		},
	
		goHome() {
		
			this.$router.push({ name: 'index'});
			
		},
	
	}




  }
</script>
  
  
  
  
  
  
<style scoped>

.clsDemo {

	color:blue;
	font-weight:150%;
}



.clsContactForm {

background-image: url("http://209.182.217.195/carousel/utilimgs/ricepaper.png");





}

.clsContactHeader {

  // padding-bottom:1.6em;
   margin-left:-0.8em;
   margin-right:-0.8em;
  min-height:3.5em;

	text-align:left;
	background-color:black;

	
}



#contactFrm {
color:#EC7063;
font-weight:bold;
margin-left:1em;

}



.divSpacerUp {

	padding-top:4em;

}
 
 
 
 .divSpacerDown {

	padding-top:10em;

}

</style>


