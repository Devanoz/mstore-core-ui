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
CLink,
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
import dataKategori from '../data/dataKategori'

export default function ListKategori() {
  const TitleKategori = dataKategori.map((data) => data.title)

  return (
    <CRow>
      {dataKategori.map((value) => {
        return (
          <CCol sm={4} md={3} className="my-3">
            <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src={value.image} />
              <CCardBody>
                <CCardTitle className='text-center'>{value.title}</CCardTitle>
                <CCardText className='text-center'>Akhmad ramadhan</CCardText>
                <CButton style={{alignItems : 'center'}} href="#">See Product</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        )
      })}
    </CRow>
  )
}
