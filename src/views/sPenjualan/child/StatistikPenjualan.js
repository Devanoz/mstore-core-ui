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
import { CChart } from '@coreui/react-chartjs'

export default function StatistikPenjualan() {
  return (
    <CCard className="mb-4">
        <CCardHeader>
          <h5 className="text-center card-title">Statistik Penjualan</h5>
        </CCardHeader>
        <CCardBody>
          <CChart
            type="line"
            data={{
              labels: ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
              datasets: [
                {
                  label: 'Statistik Penjualan',
                  backgroundColor: 'blue',
                  data: [219, 230, 210, 211, 197, 200, 255],
                },
              ],
            }}
            labels="day"
          />
        </CCardBody>
      </CCard>
  )
}
