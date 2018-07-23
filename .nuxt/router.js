import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _70e8bc1e = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _e30c8a16 = () => import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */).then(m => m.default || m)
const _f3d88f44 = () => import('../pages/home.vue' /* webpackChunkName: "pages/home" */).then(m => m.default || m)
const _cb769136 = () => import('../pages/indexbackup.vue' /* webpackChunkName: "pages/indexbackup" */).then(m => m.default || m)
const _47b1fe1e = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _f63b5dda = () => import('../pages/sliderpages/coaching.vue' /* webpackChunkName: "pages/sliderpages/coaching" */).then(m => m.default || m)
const _1b18706b = () => import('../pages/sliderpages/paymentopts.vue' /* webpackChunkName: "pages/sliderpages/paymentopts" */).then(m => m.default || m)
const _0fc8c260 = () => import('../pages/sliderpages/daytrading.vue' /* webpackChunkName: "pages/sliderpages/daytrading" */).then(m => m.default || m)
const _522663ac = () => import('../pages/mystore/mystore.vue' /* webpackChunkName: "pages/mystore/mystore" */).then(m => m.default || m)
const _4dc38014 = () => import('../pages/login/login.vue' /* webpackChunkName: "pages/login/login" */).then(m => m.default || m)
const _91f32106 = () => import('../pages/login/signup.vue' /* webpackChunkName: "pages/login/signup" */).then(m => m.default || m)
const _99f731a6 = () => import('../pages/sliderpages/education.vue' /* webpackChunkName: "pages/sliderpages/education" */).then(m => m.default || m)
const _317c42b0 = () => import('../pages/sliderpages/futuresroom.vue' /* webpackChunkName: "pages/sliderpages/futuresroom" */).then(m => m.default || m)
const _debed23a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _70e8bc1e,
			name: "about"
		},
		{
			path: "/shop",
			component: _e30c8a16,
			name: "shop"
		},
		{
			path: "/home",
			component: _f3d88f44,
			name: "home"
		},
		{
			path: "/indexbackup",
			component: _cb769136,
			name: "indexbackup"
		},
		{
			path: "/contact",
			component: _47b1fe1e,
			name: "contact"
		},
		{
			path: "/sliderpages/coaching",
			component: _f63b5dda,
			name: "sliderpages-coaching"
		},
		{
			path: "/sliderpages/paymentopts",
			component: _1b18706b,
			name: "sliderpages-paymentopts"
		},
		{
			path: "/sliderpages/daytrading",
			component: _0fc8c260,
			name: "sliderpages-daytrading"
		},
		{
			path: "/mystore/mystore",
			component: _522663ac,
			name: "mystore-mystore"
		},
		{
			path: "/login/login",
			component: _4dc38014,
			name: "login-login"
		},
		{
			path: "/login/signup",
			component: _91f32106,
			name: "login-signup"
		},
		{
			path: "/sliderpages/education",
			component: _99f731a6,
			name: "sliderpages-education"
		},
		{
			path: "/sliderpages/futuresroom",
			component: _317c42b0,
			name: "sliderpages-futuresroom"
		},
		{
			path: "/",
			component: _debed23a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
