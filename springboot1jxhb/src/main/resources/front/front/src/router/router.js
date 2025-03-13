import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shangpinleixingList from '../pages/shangpinleixing/list'
import shangpinleixingDetail from '../pages/shangpinleixing/detail'
import shangpinleixingAdd from '../pages/shangpinleixing/add'
import ershoushangpinList from '../pages/ershoushangpin/list'
import ershoushangpinDetail from '../pages/ershoushangpin/detail'
import ershoushangpinAdd from '../pages/ershoushangpin/add'
import xiaoyuanpaotuiList from '../pages/xiaoyuanpaotui/list'
import xiaoyuanpaotuiDetail from '../pages/xiaoyuanpaotui/detail'
import xiaoyuanpaotuiAdd from '../pages/xiaoyuanpaotui/add'
import paotuilingdanList from '../pages/paotuilingdan/list'
import paotuilingdanDetail from '../pages/paotuilingdan/detail'
import paotuilingdanAdd from '../pages/paotuilingdan/add'
import wanchengdingdanList from '../pages/wanchengdingdan/list'
import wanchengdingdanDetail from '../pages/wanchengdingdan/detail'
import wanchengdingdanAdd from '../pages/wanchengdingdan/add'
import pingjiaxinxiList from '../pages/pingjiaxinxi/list'
import pingjiaxinxiDetail from '../pages/pingjiaxinxi/detail'
import pingjiaxinxiAdd from '../pages/pingjiaxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shangpinleixing',
					component: shangpinleixingList
				},
				{
					path: 'shangpinleixingDetail',
					component: shangpinleixingDetail
				},
				{
					path: 'shangpinleixingAdd',
					component: shangpinleixingAdd
				},
				{
					path: 'ershoushangpin',
					component: ershoushangpinList
				},
				{
					path: 'ershoushangpinDetail',
					component: ershoushangpinDetail
				},
				{
					path: 'ershoushangpinAdd',
					component: ershoushangpinAdd
				},
				{
					path: 'xiaoyuanpaotui',
					component: xiaoyuanpaotuiList
				},
				{
					path: 'xiaoyuanpaotuiDetail',
					component: xiaoyuanpaotuiDetail
				},
				{
					path: 'xiaoyuanpaotuiAdd',
					component: xiaoyuanpaotuiAdd
				},
				{
					path: 'paotuilingdan',
					component: paotuilingdanList
				},
				{
					path: 'paotuilingdanDetail',
					component: paotuilingdanDetail
				},
				{
					path: 'paotuilingdanAdd',
					component: paotuilingdanAdd
				},
				{
					path: 'wanchengdingdan',
					component: wanchengdingdanList
				},
				{
					path: 'wanchengdingdanDetail',
					component: wanchengdingdanDetail
				},
				{
					path: 'wanchengdingdanAdd',
					component: wanchengdingdanAdd
				},
				{
					path: 'pingjiaxinxi',
					component: pingjiaxinxiList
				},
				{
					path: 'pingjiaxinxiDetail',
					component: pingjiaxinxiDetail
				},
				{
					path: 'pingjiaxinxiAdd',
					component: pingjiaxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
