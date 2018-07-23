import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3f379984 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _29c698cf = () => import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */).then(m => m.default || m)
const _21609638 = () => import('../pages/home.vue' /* webpackChunkName: "pages/home" */).then(m => m.default || m)
const _6a151f6a = () => import('../pages/indexbackup.vue' /* webpackChunkName: "pages/indexbackup" */).then(m => m.default || m)
const _52341cd7 = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _5d7c3aed = () => import('../pages/sliderpages/coaching.vue' /* webpackChunkName: "pages/sliderpages/coaching" */).then(m => m.default || m)
const _3a2d0051 = () => import('../pages/sliderpages/paymentopts.vue' /* webpackChunkName: "pages/sliderpages/paymentopts" */).then(m => m.default || m)
const _11e27a2a = () => import('../pages/sliderpages/daytrading.vue' /* webpackChunkName: "pages/sliderpages/daytrading" */).then(m => m.default || m)
const _4f378cdc = () => import('../pages/mystore/mystore.vue' /* webpackChunkName: "pages/mystore/mystore" */).then(m => m.default || m)
const _7e7438fa = () => import('../pages/login/login.vue' /* webpackChunkName: "pages/login/login" */).then(m => m.default || m)
const _c7265952 = () => import('../pages/login/signup.vue' /* webpackChunkName: "pages/login/signup" */).then(m => m.default || m)
const _24b08eda = () => import('../pages/sliderpages/education.vue' /* webpackChunkName: "pages/sliderpages/education" */).then(m => m.default || m)
const _5090d296 = () => import('../pages/sliderpages/futuresroom.vue' /* webpackChunkName: "pages/sliderpages/futuresroom" */).then(m => m.default || m)
const _5eef7449 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _3f379984,
			name: "about"
		},
		{
			path: "/shop",
			component: _29c698cf,
			name: "shop"
		},
		{
			path: "/home",
			component: _21609638,
			name: "home"
		},
		{
			path: "/indexbackup",
			component: _6a151f6a,
			name: "indexbackup"
		},
		{
			path: "/contact",
			component: _52341cd7,
			name: "contact"
		},
		{
			path: "/sliderpages/coaching",
			component: _5d7c3aed,
			name: "sliderpages-coaching"
		},
		{
			path: "/sliderpages/paymentopts",
			component: _3a2d0051,
			name: "sliderpages-paymentopts"
		},
		{
			path: "/sliderpages/daytrading",
			component: _11e27a2a,
			name: "sliderpages-daytrading"
		},
		{
			path: "/mystore/mystore",
			component: _4f378cdc,
			name: "mystore-mystore"
		},
		{
			path: "/login/login",
			component: _7e7438fa,
			name: "login-login"
		},
		{
			path: "/login/signup",
			component: _c7265952,
			name: "login-signup"
		},
		{
			path: "/sliderpages/education",
			component: _24b08eda,
			name: "sliderpages-education"
		},
		{
			path: "/sliderpages/futuresroom",
			component: _5090d296,
			name: "sliderpages-futuresroom"
		},
		{
			path: "/",
			component: _5eef7449,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
