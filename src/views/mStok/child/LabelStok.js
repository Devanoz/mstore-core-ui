import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetStatsA,
  CWidgetStatsE,
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { data } from 'core-js/internals/is-forced'
import React from 'react'
import dataPendapatan from '../../sKeuangan/data/dataPendapatan'

export default function TopWidget() {



  return (
    <CRow>
      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#15A251', color: 'white' }}
          value={
            <>
              26 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Barang Masuk"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#158266', color: 'white' }}
          value={
            <>
              66 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Stok Gudang"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#15617C', color: 'white' }}
          value={
            <>
              45 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Stok Toko"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#15A251', color: 'white' }}
          value={
            <>
              137 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Total Produk"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#158266', color: 'white' }}
          value={
            <>
              100 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Produk Terjual"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      <CCol sm={4} md={4} className="mx-auto">
        <CWidgetStatsA
          className="mb-4"
          style={{ backgroundColor: '#15617C', color: 'white' }}
          value={
            <>
              37 <span className="fs-6 fw-normal">(Items)</span>
            </>
          }
          title="Sisa Stok"
          chart={<div style={{ height: '70px' }}></div>}
        />
      </CCol>

      
    </CRow>
  )
}
