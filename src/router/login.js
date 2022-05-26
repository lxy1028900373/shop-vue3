import Login from '@/views/login/index';
import Forget from '@/views/login/forget';

export default [{
    name: '',
    path: '/',
    component: Login
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'forget',
    path: '/forget',
    component: Forget
  },
]