import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import data4Tahunan from '../data/data4Tahunan'

export default function Bar4Tahunan() {
  const empatTH = data4Tahunan.map((data)=> data.tahun)

  return (
    <CCard className="m-4">
      <CCardHeader>
        <h5 className="text-center card-title">Statistik Pendapatan Perusahaan</h5>
      </CCardHeader>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: empatTH,
            datasets: [
              {
                label: 'Pendapatan 4 Tahun Terakhir',
                backgroundColor: '#11883A',
                data: [500, 640, 390, 469],
              },
            ],
          }}
          labels="day"
        />
      </CCardBody>
    </CCard>
  )
}
