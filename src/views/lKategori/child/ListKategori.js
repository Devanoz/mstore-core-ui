import React from 'react'
//improt data
import {
  CCardImage,
  CCardTitle,
  CCardText,
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
import dataKategori from '../data/dataKategori'
import { data } from 'core-js/internals/is-forced'

export default function ListKategori() {
  const titleKategori = dataKategori.map((data) => data.title)
  return (
    <CRow>
      {titleKategori.map((value) => {
        return (
          <CCol md={4}>
            <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src="../../../assets/images/react.jpg" />
              <CCardBody>
                <CCardTitle></CCardTitle>
                <CCardText>...</CCardText>
                <CButton href="#">lihat</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        )
      })}
    </CRow>
  )
}
