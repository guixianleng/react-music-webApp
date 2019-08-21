import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'

const suspenseComponent = (Component) => {
  return (props) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}

const Recommend = suspenseComponent(lazy(() => import('../views/recommend')))
const Album = suspenseComponent(lazy(() => import('../views/Album')))
const Rank = suspenseComponent(lazy(() => import('../views/rank')))
const Singers = suspenseComponent(lazy(() => import('../views/singer')))
const Search = suspenseComponent(lazy(() => import('../connects/Search')))

// const Album = suspenseComponent(lazy(() => import('../containers/Album')))
// const Ranking = suspenseComponent(lazy(() => import('../containers/Ranking')))
const Singer = suspenseComponent(lazy(() => import('../connects/Singer')))

const router = [
  {
    path: '/',
    component: Recommend,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={'/recommend'} />
        )
      },
      {
        path: '/recommend/',
        key: 'home',
        component: Recommend,
        routes: [
          {
            path: '/recommend/:id',
            component: Album,
          }
        ]
      },
      {
        path: '/singers',
        component: Singers,
        key: 'singers',
        routes: [
          {
            path: '/singers/:id',
            component: Singer
          }
        ]
      },
      {
        path: '/rank',
        component: Rank,
        key: 'rank',
        routes: [
          {
            path: '/rank/:id',
            component: Album,
          }
        ]
      },
      {
        path: '/album/:id',
        exact: true,
        key: 'album',
        component: Album
      },
      {
        path: '/search',
        exact: true,
        key: 'search',
        component: Search
      }
    ]
  }
]

export default router
