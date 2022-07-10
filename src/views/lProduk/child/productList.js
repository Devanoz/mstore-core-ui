import React from 'react'

//import data products
import dataProduk from './../data/dataProduk'

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
      <CCard className='mb-4'>
        <CCardHeader className="text-center">
          <h5>List Produk</h5>
        </CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell>Id</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Produk</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Price</CTableHeaderCell>
                <CTableHeaderCell className="text-center">image</CTableHeaderCell>
                <CTableHeaderCell className="text-center">weight</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Category</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {dataProduk.map((val) => {
                return (
                  <CTableRow>
                    <CTableDataCell>{val.id}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.tittle}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.price}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.image}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.weight}</CTableDataCell>
                    <CTableDataCell className="text-center">{val.catogory.tittle}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton className="btn btn-success" href="/#/lProduk/edit">
                        edit
                      </CButton>
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
