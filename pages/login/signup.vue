
<template>

<section class="hero is-success is-fullheight signUpHero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Sign up</h3>
                    <p class="subtitle has-text-grey">Please sign up below</p>
                    <div class="box">
                         <form>
						 
                           <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Your First Name" autofocus="">
                                </div>
                            </div>

													 
                           <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Your Last Name" autofocus="">
                                </div>
                            </div>

						 
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
	
	
</template>

<script>



import $ from 'jquery'

export default {

  mounted(){
  
  

  
  }


}





</script>




<style scoped>



.signUpHero {

background-color: #48D1CC;
color:white;

}




</style>