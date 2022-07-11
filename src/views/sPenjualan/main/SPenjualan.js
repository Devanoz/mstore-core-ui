import React from 'react'
//import data from
import dataProduk from '../data/dataProduk'

import MultipleLineChart from "../child/MultipleLineChart"

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

//import from child
import StatistikPenjualan from '../child/StatistikPenjualan'
import RasioPenjualan from "../child/RasioPenjualan"
import StatistikJumlahPenjualan from '../child/StatistikJumlahPenjualan'
import StatistikPenjualanPerbulan from '../child/StatistikPenjualanPerbulan'
// import WidgetsBrand from '../widgets/WidgetsBrand'
import TopWidget from '../child/TopWidget'

const SPenjualan = () => {
  return (
    <>
      <TopWidget />
      <CRow>
        <CCol>
          <StatistikJumlahPenjualan/>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <StatistikPenjualanPerbulan/>
        </CCol>
      </CRow>

      
      <CRow>
        <CCol>
          <StatistikPenjualan />
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <RasioPenjualan/>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <MultipleLineChart/>
        </CCol>
      </CRow>
    </>
  )
}

export default SPenjualan
