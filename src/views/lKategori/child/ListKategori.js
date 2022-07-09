import React from 'react'

//import data product
import dataKategori from '../data/dataKategori'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCardImage,
  CCardTitle,
  CCard,
  CCardText,
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
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import second from '../data/dataKategori'
import { data } from 'core-js/internals/is-forced'

export default function ListKategori() {

  const TitleKategori = dataKategori.map((data)=>data.title)


  return (
    <CRow>
      {TitleKategori.map((value) => {
        return(
      <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src="/images/react.jpg" />
  <CCardBody>
    <CCardTitle >{value}</CCardTitle>
    <CCardText>
      Akhmad ramadhan
    </CCardText>
    <CButton href="#">See Product</CButton>
  </CCardBody>
</CCard>)})}
</CRow>
    
  )
}
