import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { blnPendapatan, mguPendapatan, hriPendapatan } from '../data/dataPendapatan'

export default function BlnLineChart() {
  const bln = blnPendapatan.map((data)=> data.bulan);

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <h5 className="text-center card-title">Visualisasi Pendapatan Bulanan</h5>
      </CCardHeader>
      <CCardBody>
        <CChart
          type="line"
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'Mai',
              'Jun',
              'Jul',
              'Agt',
              'Sep',
              'Okt',
              'Nov',
              'Des',
            ],
            datasets: [
              {
                label: 'Pendapatan Bulanan',
                backgroundColor: 'rgba(21, 173, 74, 0.2)',
                borderColor: 'rgba(0, 0, 0, 1)',
                pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                pointBorderColor: '#000',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 56, 47, 65],
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
