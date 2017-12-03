import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CallController from '@/components/CallController'
import Integration from '@/components/Integration'
import NeedMedicalCare from '@/components/NeedMedicalCare'
import Header from '@/components/Header'
import Release from '@/components/Release'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/call',
      name: 'Chamada',
      component: CallController
    },
    {
      path: '/integration',
      name: 'Integration',
      component: Integration
    },
    {
      path: '/medical',
      name: 'Medical',
      component: NeedMedicalCare
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/release',
      name: 'Despacho',
      component: Release
    }
  ]
})
