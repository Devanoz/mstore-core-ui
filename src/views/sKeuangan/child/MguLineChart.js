import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { blnPendapatan, mguPendapatan, hriPendapatan } from '../data/dataPendapatan'

export default function MguLineChart() {
  const Mgu = mguPendapatan.map((data)=> data.minggu);
  return (
    <CCard className="mt-4">
      <CCardHeader>
        <h5 className="text-center card-title">Visualisasi Pendapatan Harian</h5>
      </CCardHeader>
      <CCardBody>
        <CChart
          type="line"
          data={{
            labels: [
              'Minggu Pertama',
              'Minggu Kedua',
              'Minggu Ketiga',
              'Minggu Keempat',
            ],
            datasets: [
              {
                label: 'Pendapatan Harian',
                backgroundColor: 'rgba(21, 173, 74, 0.2)',
                borderColor: 'rgba(0, 0, 0, 1)',
                pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                pointBorderColor: '#000',
                data: [40, 20, 12, 39],
              },
            ],
          }}
        />
        <div className="mt-2">
          <h6 className="text-center card-title ">Tahun 2022</h6>
        </div>
      </CCardBody>
    </CCard>
  )
}
