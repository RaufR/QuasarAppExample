
const routes = [
  {path: '/landing_page', component: () => import('pages/LandingPage.vue')},
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/post/:id', component: () => import('components/post.vue') },
      { path: '/business', component: () => import('pages/BusinessPage.vue') },
      { path: '/career', component: () => import('pages/CareerPage.vue') },
      { path: '/start_up', component: () => import('pages/StartUpPage.vue') },
      { path: '/news', component: () => import('pages/NewsPage.vue') },
      { path: '/stock_market', component: () => import('pages/StockMarketPage.vue') },
      { path: '/bookmarks/:id', component: () => import('pages/BookmarksPage.vue') },
      { path: '/likes/:id', component: () => import('pages/LikesPage.vue') },
      { path: '/search/:search', component: () => import('components/SearchResult.vue') },
      { path: '/404', component: () => import('pages/Page404.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
