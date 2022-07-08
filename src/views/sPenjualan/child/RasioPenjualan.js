import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import React from 'react'

//import data
import dataProduk from "../data/dataProduk"

export default function RasioPenjualan() {
    const dataProdukOnlyTittle = dataProduk.map((val)=>val.tittle);

  return (
    <CCard className="m-4">
      <CCardHeader>
        <h5 className="text-center">Rasio Penjualan</h5>
      </CCardHeader>
      <CCardBody>
        <CChart
          type="pie"
          data={{
            labels: dataProdukOnlyTittle,
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [40, 20, 30, 10],
              },
            ],
          }}
        />
      </CCardBody>
    </CCard>
  )
}
