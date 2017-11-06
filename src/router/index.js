import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Header from '@/components/Header'
import Home from '@/components/Header/Home'
import FriendscCircle from '@/components/Header/FriendsCircle'
import Local from '@/components/Header/Local'
import Music from '@/components/home/Music'
import BroadcastingStation from '@/components/home/BroadcastingStation'
// import Rank from '@/components/home/Rank'
import Video from '@/components/home/Video'
import Search from '@/components/Search' 
import MusicList from '@/components/MusicList'

import Player from '@/components/Player'
import Swiper from '@/components/Swiper'

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
              component: Music
            }
          ]
        }, {
          path: '/home',
          name: 'home',
          component: Home,
          children: [
            {
              path: '/',
              component: Music
            }, {
              path: '/music',
              name: 'music',
              component: Music
            }, {
              path: '/bs',
              name: 'bs',
              component: BroadcastingStation
            },{
              path: '/video',
              name: 'video',
              component: Video
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
      path:'/search',
      name:'search',
      component:Search
    },{
      path:'/musiclist',
      name:'musiclist',
      component:MusicList
    },{
      path:'/player',
      component:Player
    },{
      path:"/swiper",
      component:Swiper
    }
  ]
})
