import React from 'react'
import { blnPendapatan, mguPendapatan, hriPendapatan } from '../../sKeuangan/data/dataPendapatan'
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
  CProgressBar,
} from '@coreui/react'
import { CChart, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { data } from 'core-js/internals/is-forced'
import dataStok from '../data/dataStok'
export default function Keterisian() {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
  const stock = dataStok.map((data) => data.stock);
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={12}>
            <h4 id="traffic" className="card-title mb-0">
              Keterisian Barang
            </h4>
            <div className="small text-medium-emphasis">July 2022</div>
          </CCol>
          {/* <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol> */}
        </CRow>
        <CChartLine
          style={{ height: '300px', marginTop: '40px' }}
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
                label: 'My First dataset',
                backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                borderColor: getStyle('--cui-info'),
                pointHoverBackgroundColor: getStyle('--cui-info'),
                borderWidth: 2,
                data: stock,
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false,
                },
              },
              y: {
                ticks: {
                  maxTicksLimit: 6,
                  stepSize: Math.ceil(2000000 / 100000),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}
        />
      </CCardBody>
      <CCardFooter>
        <CRow className="text-center">
          <h4>Keterisian Gudang</h4>
        </CRow>
        <CRow className="text-center">
          <CCol sm={9} md={9} className="mb-sm-2 mb-0">
            <CProgress className="mt-3">
              <CProgressBar color={'success'} variant="striped" animated value={70} />
            </CProgress>
          </CCol>
          <CCol sm={3} md={3} className="mb-sm-2 mb-0">
            <div className="mt-2">
              <strong >
                {'29.000 Item'} ({70}%)
              </strong>
            </div>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  )
}
