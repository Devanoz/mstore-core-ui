import React from 'react'
//import data
import dataProduk from "../data/dataProduk"


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
    const dataProdukOnlyTittle = dataProduk.map((data)=> data.tittle);

  return (
    <CCard className="m-4">
        <CCardHeader>
          <h5 className="text-center card-title">Statistik Penjualan</h5>
        </CCardHeader>
        <CCardBody>
          <CChart
            type="bar"
            data={{
              labels:dataProdukOnlyTittle,
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
