import { lazy } from 'react'
const Login = lazy(() => import("pages/login"))
const SignUp = lazy(() => import("pages/signUp"))

const routes = [
  {
    path: '/',
    exact: true,
    redirectTo: 'login',
  },
  {
    path: '/',
    routes: [
      {
        path: '/login',
        component: Login,
        name: 'login',
        lazy: true
      },
       {
        path: '/sign-up',
        component: SignUp,
        name: 'sign-up',
        lazy: true
      },
    ],
  },
]

export default routes
