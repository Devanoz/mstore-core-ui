import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

//import sidebar component to appcontent
import HelloWorld from '../views/pages/hello-world/hello world'
import Dashboard from 'src/views/dashboard/Dashboard'
import SPenjualan from 'src/views/sPenjualan/SPenjualan'
import SKeuangan from 'src/views/sKeuangan/SKeuangan'
import LProduk from 'src/views/lProduk/main/LProduk'
import LKategori from 'src/views/lKategori/LKategori'
import MStok from 'src/views/mStok/MStok'
// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sPenjualan" element={<SPenjualan />} />
          <Route path="/sKeuangan" element={<SKeuangan />} />
          <Route path="/lProduk" element={<LProduk />} />
          <Route path="/lKategori" element={<LKategori />} />
          <Route path="/mStok" element={<MStok />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)

// {routes.map((route, idx) => {
//   return (
//     route.element && (
//       <Route
//         key={idx}
//         path={route.path}
//         exact={route.exact}
//         name={route.name}
//         element={<route.element />}
//       />
//     )
//   )
// })}
