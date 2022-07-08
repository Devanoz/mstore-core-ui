import React from 'react'

//import data products
import dataProduk from '../data/dataProduk'

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
        <CCardHeader className="text-center">List Produk</CCardHeader>
        <CCardBody className="px-2">
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
              {dataProduk.map((val) => {
                return (
                  <CTableRow>
                    <CTableDataCell>{val.id}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.tittle}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.price}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.stock}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.image}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.weight}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.catogory.tittle}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton className="btn btn-success">edit</CButton>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton className="btn btn-danger">Delete</CButton>
                    </CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}
