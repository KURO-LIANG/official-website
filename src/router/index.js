import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/product',
          name: 'product',
          component: resolve => require(['@/view/Product'], resolve),
          meta: {
            title: '产品'
          },
          children: [
            {
              path: '/product?type=0',
              name: 'product',
              meta: {
                title: '产品丨2021茶吧机'
              }
            },
            {
              path: '/product?type=1',
              name: 'product',
              meta: {
                title: '产品丨宜达茶吧机'
              }
            },
            {
              path: '/product?type=2',
              name: 'product',
              meta: {
                title: '产品丨爱妻茶吧机'
              }
            },
            {
              path: '/product?type=3',
              name: 'product',
              meta: {
                title: '产品丨水柱款茶吧机'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '技术特点'
          }
        },
        // {
        //   path: '/newsinformation',
        //   name: 'newsinformation',
        //   component: resolve => require(['@/view/NewsInformation'], resolve),
        //   meta: {
        //     title: '新闻动态'
        //   }
        // },
        {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        },
        // {
        //   path: '/jobchance',
        //   name: 'jobchance',
        //   component: resolve => require(['@/view/JobChance'], resolve),
        //   meta: {
        //     title: '工作机会'
        //   }
        // },
        {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        // {
        //   path: '/servicedetail',
        //   name: 'servicedetail',
        //   component: resolve => require(['@/view/ServiceDetail'],resolve),
        //   meta: {
        //     title: '相关服务'
        //   }
        // }
      ]
    }
  ]
})
