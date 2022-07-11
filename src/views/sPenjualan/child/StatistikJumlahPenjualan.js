import React from 'react'

import {CCard,CCardHeader,CCardBody} from "@coreui/react"

import {CChart} from "@coreui/react-chartjs"

export default function StatistikJumlahPenjualan() {
  return (
    <>
        <CCard className="mb-4">
        <CCardHeader>
          <h5 className="text-center card-title">Statistik Penjualan Produk</h5>
        </CCardHeader>
        <div className="mt-3">
            <h5 className="text-center card-title ">Juli 2022</h5>
        </div>
        <CCardBody>
          <CChart
            type="line"
            data={{
              labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'minggu'],
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
    </>
  )
}
