import React, { lazy, Suspense } from 'react'

const suspenseComponent = (Component) => {
  return (props) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}

const Recommend = suspenseComponent(lazy(() => import('../views/recommend')))
const Rank = suspenseComponent(lazy(() => import('../views/rank')))
const Singers = suspenseComponent(lazy(() => import('../views/singer')))
const SingerDetail = suspenseComponent(lazy(() => import('../views/singer-detail')))
const Search = suspenseComponent(lazy(() => import('../connects/Search')))

const Album = suspenseComponent(lazy(() => import('../connects/album')))
const RankDetail = suspenseComponent(lazy(() => import('../connects/Rank')))
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
        component: RankDetail
      }
    ]
  },
  {
    path: '/singer',
    component: Singers,
    routes: [
      {
        path: '/singer/:id',
        component: SingerDetail
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
