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
  CWidgetStatsF,
  

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
  cilChartPie
} from '@coreui/icons'
import dataKategori from '../../lKategori/data/dataKategori'
import dataProduk from '../../lProduk/data/dataProduk'
import { data } from 'core-js/internals/is-forced'
export default function ProductKategori(){

    return(
        <CRow >

            {dataKategori.map((data)=>{
                return(
                    <CCol xs={6}>
      <CWidgetStatsF
        className="mb-3"
        color="primary"
        icon={<CIcon icon={cilChartPie} height={24} />}
        value={data.title}/>
    </CCol>
                )
            }
            )}

            {dataProduk.map((data)=>{
                return(
                    <CCol xs={6}>
      <CWidgetStatsF
        className="mb-3"
        color="warning"
        icon={<CIcon icon={cilChartPie} height={24} />}
        title= {data.tittle}
        value= {data.stock.toString}/>
    </CCol>
                )
            })}
    </CRow>

    

            
    )
}