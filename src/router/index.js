import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Header from '@/components/Header'
import Home from '@/components/Home'
import FriendscCircle from '@/components/FriendsCircle'
import Local from '@/components/Local'
import Music from '@/components/home/Music'
import BroadcastingStation from '@/components/home/BroadcastingStation'
import Rank from '@/components/home/Rank'
import Recomend from '@/components/home/Recomend'
import Search from '@/components/Search' 

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
      children: [
        {
          path: '/',
          component: Home,
          children: [
            {
              path: '/',
              component: Recomend
            }
          ]
        }, {
          path: '/home',
          name: 'home',
          component: Home,
          children: [
            {
              path: '/',
              component: Recomend
            }, {
              path: '/music',
              name: 'music',
              component: Music
            }, {
              path: '/bs',
              name: 'bs',
              component: BroadcastingStation
            }, {
              path: '/rank',
              name: 'rank',
              component: Rank
            },{
              path: '/recomend',
              name: 'recomend',
              component: Recomend
            }
          ]
        }, {
          path: '/friendscircle',
          name: 'friendscircle',
          component: FriendscCircle
        }, {
          path: '/local',
          name: 'local',
          component: Local
        }
      ]
    },{
      path:"/search",
      name:"search",
      component:Search
    }
  ]
})
