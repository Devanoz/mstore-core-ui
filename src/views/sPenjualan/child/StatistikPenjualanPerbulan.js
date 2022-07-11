import React from 'react'

import {CCard,CCardHeader,CCardBody} from "@coreui/react"

import {CChart} from "@coreui/react-chartjs"

export default function StatistikPenjualanPerbulan() {
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
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul','Agu','Sep','Okt','Nov','Des'],
              datasets: [
                {
                  label: 'Statistik Penjualan',
                  backgroundColor: 'blue',
                  data: [2550, 2595,2679, 2999, 3200, 3110, 3300,3350,3200,3100,3050,3150],
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
