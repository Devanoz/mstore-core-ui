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

import { cilPeople } from '@coreui/icons'

let data = [
  {
    nama: 'baju batik',
    harga: 12000,
  },
]

export default function ProductList() {
  return (
    <>
      <CCard>
        <CCardBody className="p-1">
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                {/* <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell> */}
                <CTableHeaderCell>Id</CTableHeaderCell>
                <CTableHeaderCell className="text-center">tittle</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Price</CTableHeaderCell>
                <CTableHeaderCell className="text-center">stock</CTableHeaderCell>
                <CTableHeaderCell className="text-center">image</CTableHeaderCell>
                <CTableHeaderCell className="text-center">weight</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Category</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell className="text-center">kaos malioboro</CTableDataCell>
                <CTableDataCell className="text-center">150000</CTableDataCell>
                <CTableDataCell className="text-center">350</CTableDataCell>
                <CTableDataCell className="text-center">image</CTableDataCell>
                <CTableDataCell className="text-center">1kg</CTableDataCell>
                <CTableDataCell className="text-center">Kaos</CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton className="btn btn-success">edit</CButton>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton className="btn btn-danger">Delete</CButton>
                </CTableDataCell>

              </CTableRow>
            </CTableBody>
          </CTable>
         
        </CCardBody>
      </CCard>
    </>
  )
}
