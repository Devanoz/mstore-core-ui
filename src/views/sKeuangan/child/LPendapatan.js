import React from 'react'
import { blnPendapatan, mguPendapatan, hriPendapatan } from '../data/dataPendapatan'
import { 
  CWidgetStatsA, 
  CRow, 
  CCol, 
  CCard, 
  CCardBody, 
  CCardHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
 } from '@coreui/react'

import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

export default function LPendapatan() {
  const hr = hriPendapatan.map((data)=> data.hari);

  return (
    <CCard className="m-4">
      <CCardHeader>
        <h5 className="text-center">Pendapatan Perusahaan</h5>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-1"
              style={{ backgroundColor: '#15AD4A', color: 'white' }}
              value={
                <>
                  $9.000{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Hari Ini"
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: 'white',
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>

          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-1"
              style={{ backgroundColor: 'rgb(0, 0, 0, 0.2)', color: 'black' }}
              value={
                <>
                  $9.000{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Minggu Ini"
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(0,0,0,.55)',
                        pointBackgroundColor: 'black',
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>

          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-1"
              style={{ backgroundColor: 'rgb(0, 0, 0, 0.2)', color: 'black' }}
              value={
                <>
                  $9.000{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Bulan ini"
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(0,0,0,.55)',
                        pointBackgroundColor: 'black',
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>

          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-1"
              style={{ backgroundColor: 'rgb(0, 0, 0, 0.2)', color: 'black' }}
              value={
                <>
                  $9.000{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Tahun Ini"
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(0,0,0,.55)',
                        pointBackgroundColor: 'black',
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}
