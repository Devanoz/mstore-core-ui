import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

//import sidebar component to appcontent
import HelloWorld from '../views/pages/hello-world/hello world'
import Dashboard from 'src/views/dashboard/Dashboard'
import SPenjualan from 'src/views/sPenjualan/main/SPenjualan'
import SKeuangan from 'src/views/sKeuangan/main/SKeuangan'
import LProduk from 'src/views/lProduk/main/LProduk'
import LKategori from 'src/views/lKategori/main/LKategori'
import MStok from 'src/views/mStok/main/MStok'

import EditProduk from "../views/lProduk/form/EditProduk"
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
          {/* <Route path="/edit-produk" element={<EditProduk />} /> */}

          {/* lProduk */}
          <Route path="/lProduk/edit" element={<EditProduk />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)