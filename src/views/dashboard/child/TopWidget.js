import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetStatsA,
  CWidgetStatsE,
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { data } from 'core-js/internals/is-forced'
import React from 'react'
import dataPendapatan from '../../sKeuangan/data/dataPendapatan'
import {blnPendapatan} from '../../sKeuangan/data/dataPendapatan'

export default function TopWidget() {

  const quartalPertama = blnPendapatan.filter(
    (data) =>{
        return(data.id < '5')
    }
    )
  const quartalKedua = blnPendapatan.filter(
    (data) =>{
        return(data.id > 4 && data.id < 9)
    })

  const quartalKetiga = blnPendapatan.filter(
    (data) =>{
        return(data.id > 8)
    })

  return (
    <CRow>
      <CCol sm={3} md={4}>
        <CWidgetStatsA
          className="mb-4"
          style={{backgroundColor:'#2E0249', color:'white'
        }}
          value={
            <>
              100{' '}
              <span className="fs-6 fw-normal">
                (Items)
              </span>
            </>
          }
          title="Quartal Pertama"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: quartalPertama.map((data)=> data.bulan) ,
                // labels : ['January','febri'],
                datasets: [
                  {
                    label: 'Jumlah Produk ',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: 'transparent',
                    data: [90, 10, 10, 20],
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
                    min: 0,
                    max: 100,
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
      <CCol sm={3} md={4}>
        <CWidgetStatsA
          className="mb-4"
          style={{backgroundColor:'#570A57', color:'white'
        }}
          // color="danger"
          value={
            <>
              223 {' '}
              <span className="fs-6 fw-normal ">
                (Items)
              </span>
            </>
          }
          title="Quartal Kedua"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: quartalKedua.map((data)=> data.bulan),
                datasets: [
                  {
                    label: 'Jumlah Produk ',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: 'transparent',
                    data: [ 20, 50, 12, 23],
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
                    min: 0,
                    max: 100,
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
      <CCol sm={3} md={4}>
        <CWidgetStatsA
          className="mb-4"
          style={{backgroundColor:'#A91079', color:'white'
        }}
          value={
            <>
              120 {' '}
              <span className="fs-6 fw-normal">
                (Items)
              </span>
            </>
          }
          title="Quartal Ketiga"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: quartalKetiga.map((data)=> data.bulan),
                datasets: [
                  {
                    label: 'Jumlah Produk ',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: 'transparent',
                    data: [44,66,76,44],
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
                    min: 0,
                    max: 100,
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
  )
}
