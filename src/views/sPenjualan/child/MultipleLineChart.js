import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

export default function MultipleLineChart() {
  return (
    <CCard>
      <CCardHeader>
        <h5>Statistik Penjualan per kategori</h5>
      </CCardHeader>
      <CCardBody>
        <CChart
          type="line"
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Kaos',
                backgroundColor: "red",
                borderColor: "red",
                pointHoverBackgroundColor:"red",
                borderWidth: 2,
                data: [
                  20,50,37,60,95,50,70,20
                ],
              },
              {
                label: 'Batik',
                backgroundColor: 'green',
                borderColor: "green",
                pointHoverBackgroundColor:"green",
                borderWidth: 2,
                data: [20,40,40,50,70,65,50],
              },
              {
                label: 'Gantungan kunci',
                backgroundColor: 'blue',
                borderColor: "blue",
                pointHoverBackgroundColor:"blue",
                data: [20,95,60,37,65,40,90,65],
              },
              {
                label: 'Sandal',
                backgroundColor: 'orange',
                borderColor: "orange",
                pointHoverBackgroundColor:"orange",
                data: [20,95,60,37,65,40,90,65],
              }
            ],
          }}
        />
      </CCardBody>
    </CCard>
  )
}
