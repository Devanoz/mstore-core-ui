import React from 'react'

import { CContainer } from '@coreui/react'
import { Routes, Route } from 'react-router'

import EditProduk from '../form/EditProduk'

export default function index() {
  return (
    <CContainer>
      <Routes>
        <Route path="/edit-produk" element = {<EditProduk/>}/>
      </Routes>
    </CContainer>
  )
}
