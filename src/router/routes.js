import AccountCenter from '../views/Member/AccountCenter.vue'
import siftFinance from '../views/Product/siftFinanceList.vue'

// 配置路由规则
const routes = [
  {
    path: '/',
    redirect: '/Product/siftFinance'
  },
  {
    path: '/Product/siftFinance',
    component: siftFinance
  },
  {
    path: '/Member/AccountCenter',
    component: AccountCenter
  }
]
export default routes
