import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CallController from '@/components/CallController'
import NeedMedicalCare from '@/components/NeedMedicalCare'
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
    }, {
      path: '/medical',
      name: 'Medical',
      component: NeedMedicalCare
    },
    {
      path: '/release',
      name: 'Despacho',
      component: Release
    }
  ]
})
