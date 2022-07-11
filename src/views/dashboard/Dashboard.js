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
import { CChart, CChartLine } from '@coreui/react-chartjs'
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
import TopWidget from '../sPenjualan/child/TopWidget'
import LaluLintas from './child/LaluLitas'
import Traffic from './child/Traffic'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import ProductKategori from './child/ProductKategori'

//import from sidebar
import SPenjualan from '../sPenjualan/main/SPenjualan'
import SKeuangan from '../sKeuangan/main/SKeuangan'
import LProduk from '../lProduk/main/LProduk'
import LKategori from '../lKategori/main/LKategori'
import MStok from '../mStok/main/MStok'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <CRow className="my-3">
        <SPenjualan />
      </CRow>

      <Traffic />

      {/* <WidgetsBrand withCharts /> */}

      <ProductKategori />

      <CRow>
        <CCol xs>{/* <LaluLintas /> */}</CCol>
      </CRow>

      <CRow className="my-3">
        <SKeuangan />
      </CRow>

      <CRow className="my-3">
        <LProduk />
      </CRow>

      <CRow className="my-3">
        <LKategori />
      </CRow>

      <CRow className="my-3">
        <MStok />
      </CRow>
    </>
  )
}

export default Dashboard
