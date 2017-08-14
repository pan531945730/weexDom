import AccountCenter from '../views/Member/AccountCenter.vue'
import siftFinance from '../views/Product/siftFinanceList.vue'
import steward from '../views/Product/stewardList.vue'
import contactUs from '../views/Member/contactUs.vue'

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
    path: '/Product/steward',
    component: steward
  },
  {
    path: '/Member/AccountCenter',
    component: AccountCenter
  },
  {
    path: '/Member/contactUs',
    component : contactUs
  }
]
export default routes
