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
import React from 'react'
import dataStok from '../data/dataStok'

export default function TabelStok() {
  return (
    <CCard>
      <CCardHeader className="text-center">
        <h5>Data Stok Produk</h5>
      </CCardHeader>
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow className="text-center">
              <CTableHeaderCell>Id</CTableHeaderCell>
              <CTableHeaderCell>Produk</CTableHeaderCell>
              <CTableHeaderCell>Barang Masuk</CTableHeaderCell>
              <CTableHeaderCell>Stok Gudang</CTableHeaderCell>
              <CTableHeaderCell>Stok Toko</CTableHeaderCell>
              <CTableHeaderCell>Total Produk</CTableHeaderCell>
              <CTableHeaderCell>Produk Terjual</CTableHeaderCell>
              <CTableHeaderCell>Sisa Stok</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataStok.map((data) => {
              return (
                <CTableRow className='text-center'>
                  <CTableDataCell>{data.id}</CTableDataCell>
                  <CTableDataCell>{data.title}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                  <CTableDataCell>{data.stock}</CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}
