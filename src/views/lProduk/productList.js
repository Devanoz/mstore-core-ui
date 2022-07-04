/* eslint-disable prettier/prettier */
import React from 'react'


import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {cilPeople} from '@coreui/icons'

let data = [
  {
    nama: 'baju batik',
    harga: 12000,
  },
]

export default function ProductList() {
  return <>
    <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">tittle</CTableHeaderCell>
                    <CTableHeaderCell >Price</CTableHeaderCell>
                    <CTableHeaderCell className = "text-center">stock</CTableHeaderCell>
                    <CTableHeaderCell className = "text-center" >image</CTableHeaderCell>
                    <CTableHeaderCell>weight</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  
                </CTableBody>
              </CTable>
  </>
}
