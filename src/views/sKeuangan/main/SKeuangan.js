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

// import WidgetsBrand from '../../widgets/WidgetsBrand'
// import WidgetsDropdown from '../../widgets/WidgetsDropdown'
import LPendapatan from '../child/LPendapatan'
import BlnLineChart from '../child/BlnLineChart'
import HrLineChart from '../child/HrLineChart'
import MguLineChart from '../child/MguLineChart'
import Bar4Tahunan from '../child/Bar4Tahunan'
const SKeuangan = () => {
  return (
    <>
      <CRow>
        <CCol md={12}>
          <h3>Pendapatan Perusahaan</h3>
        </CCol>
      </CRow>

      <CRow>
        <CCol md={12}>
          <LPendapatan />
        </CCol>
      </CRow>

      <CRow>
        <CCol md={4}>
          <HrLineChart />
        </CCol>
        <CCol md={4}>
          <MguLineChart />
        </CCol>
        <CCol md={4}>
          <BlnLineChart />
        </CCol>
      </CRow>

      <CRow>
        <CCol md={12}>
          <Bar4Tahunan />
        </CCol>
      </CRow>
    </>
  )
}

export default SKeuangan
