import React, { lazy, Suspense } from 'react'

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
    path: '/recommend',
    component: Recommend,
    routes: [
      {
        path: '/recommend/:id',
        component: Album
      }
    ]
  },
  {
    path: '/ranking',
    component: Rank,
    routes: [
      {
        path: '/ranking/:id',
        component: Album
      }
    ]
  },
  {
    path: '/singer',
    component: Singers,
    routes: [
      {
        path: '/singer/:id',
        component: Singer
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    routes: [
      {
        path: '/search/album/:id',
        component: Album
      },
      {
        path: '/search/singer/:id',
        component: Singer
      }
    ]
  },
  {
    component: () => (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        开发中...
      </div>
    )
  }
]

export default router
