import React from 'react'
//import data
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
import { CChart } from '@coreui/react-chartjs'

export default function StatistikPenjualan() {
  // dataProduk = dataProduk.map((val)=>val.tittle);
  const dataProdukOnlyTittle = dataProduk.map((data) => data.tittle)

  return (
    <CCard className="m-4">
      <CCardHeader>
        <h5 className="text-center card-title">Statistik Penjualan Produk</h5>
      </CCardHeader>
      <div className="mt-3">
            <h5 className="text-center card-title ">Juli 2022</h5>
        </div>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: dataProdukOnlyTittle,
            datasets: [
              {
                label: 'Statistik Penjualan',
                backgroundColor: 'blue',
                data: [550, 560, 570, 580],
              },
            ],
          }}
          labels="day"
        />
      </CCardBody>
    </CCard>
  )
}
