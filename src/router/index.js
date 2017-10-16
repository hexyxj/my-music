import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/components/Home'
import FriendscCircle from '@/components/FriendsCircle'
import Local from '@/components/Local'
import Music from '@/components/home/Music'
import BroadcastingStation from '@/components/home/BroadcastingStation'
import Video from '@/components/home/Video'

Vue.use(Router)

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
            }, {
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
    }
  ]
})
