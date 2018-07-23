<!-- components/Navbar.vue -->

<template>
  <div class="container mainContainer">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">

          <nuxt-link class="navbar-item" to="/shop"><span class="menuShop">Shop</span></nuxt-link>
		  <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
		  
		  				  
			<div class="level-right clsLoginGroup">

			
			<p class="level-item"><nuxt-link class="navbar-item button is-info btnLogin" to="/login/login">Login</nuxt-link></p>
			<p class="level-item"><nuxt-link class="navbar-item button is-success btnLogin" to="/login/signup">Sign up</nuxt-link></p>

				
			</div>

        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

	.navbar {
		background-color:#f80 !important;

		font-weight:bold;
		font-size:140%;
		
	
	}
	
	.navbar-item {
	
	color:White !important;	
	
	}
	
	
	
	
	.navbar-item:hover {
	
	color:purple !important;
	
	
	}
	
	
	
	
	.menuShop {
		margin-right:2em;
		font-size:140%;
		 font-weight:bold;
		 color:cyan;
	
	}
	
	
	
	.clsLoginGroup {
	  margin-left:6em;
	  margin-right:-8em;
	
	
	}
	
	
</style>