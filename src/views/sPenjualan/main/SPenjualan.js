import React from 'react'
//import data from
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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

//import from child
import StatistikPenjualan from '../child/StatistikPenjualan'
import RasioPenjualan from "../child/RasioPenjualan"
// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../../widgets/WidgetsDropdown'
import { data } from 'core-js/internals/is-forced'

const SPenjualan = () => {
  return (
    <>
      <CRow className="m-4">
        <CCol md={9}>
          <CCard>
            <CCardBody>col1</CCardBody>
          </CCard>
         
        </CCol>

        <CCol md={3}>
          <CCard>
            <CCardBody>col2</CCardBody>
          </CCard>
         
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
    </>
  )
}

export default SPenjualan
