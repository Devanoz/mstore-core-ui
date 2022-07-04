import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const SPenjualan = React.lazy(() => import('./views/sPenjualan/SPenjualan'))
const SKeuangan = React.lazy(() => import('./views/sKeuangan/SKeuangan'))
const LProduk = React.lazy(() => import('./views/lProduk/LProduk'))
const LKategori = React.lazy(() => import('./views/lKategori/LKategori'))
const MStok = React.lazy(() => import('./views/mStok/MStok'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/sPenjualan', name: 'SPenjualan', element: SPenjualan },
  { path: '/sKeuangan', name: 'SKeuangan', element: SKeuangan },
  { path: '/lProduk', name: 'LProduk', element: LProduk },
  { path: '/lKategori', name: 'LKategori', element: LKategori },
  { path: '/mStok', name: 'MStok', element: MStok },
]

export default routes
