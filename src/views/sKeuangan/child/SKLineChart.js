import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { blnPendapatan, mguPendapatan, hriPendapatan } from '../data/dataPendapatan'
import empatTH from '../data/data4Tahunan'

export default function SKLineChart() {

  return (
    <CRow>
      <CCol sm={10} xl={6} className="mx-auto">
        <CCard className="mt-4">
          <CCardHeader>
            <h5 className="text-center card-title">Visualisasi Pendapatan Harian</h5>
          </CCardHeader>
          <CCardBody>
            <CChart
              type="line"
              data={{
                labels: hriPendapatan.map((data) => data.hari),
                datasets: [
                  {
                    label: 'Pendapatan Harian',
                    backgroundColor: 'rgba(21, 173, 74, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                    pointBorderColor: '#000',
                    data: hriPendapatan.map((data) => data.nominal),
                  },
                ],
              }}
            />
            <div className="mt-2">
              <h6 className="text-center card-title ">Tahun 2022</h6>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm={10} xl={6} className="mx-auto">
        <CCard className="mt-4">
          <CCardHeader>
            <h5 className="text-center card-title">Visualisasi Pendapatan Bulanan</h5>
          </CCardHeader>
          <CCardBody>
            <CChart
              type="line"
              data={{
                labels: blnPendapatan.map((data) => data.bulan),
                datasets: [
                  {
                    label: 'Pendapatan Bulanan',
                    backgroundColor: 'rgba(21, 173, 74, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                    pointBorderColor: '#000',
                    data: blnPendapatan.map((data) => data.nominal),
                  },
                ],
              }}
            />
            <div className="mt-2">
              <h6 className="text-center card-title ">Tahun 2022</h6>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm={10} xl={6} className="mx-auto">
        <CCard className="mt-4">
          <CCardHeader>
            <h5 className="text-center card-title">Visualisasi Pendapatan Mingguan</h5>
          </CCardHeader>
          <CCardBody>
            <CChart
              type="line"
              data={{
                labels: mguPendapatan.map((data) => data.minggu),
                datasets: [
                  {
                    label: 'Pendapatan Mingguan',
                    backgroundColor: 'rgba(21, 173, 74, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                    pointBorderColor: '#000',
                    data: mguPendapatan.map((data) => data.nominal),
                  },
                ],
              }}
            />
            <div className="mt-2">
              <h6 className="text-center card-title ">Tahun 2022</h6>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm={10} xl={6} className="mx-auto">
        <CCard className="mt-4">
          <CCardHeader>
            <h5 className="text-center card-title">Visualisasi Pendapatan Tahunan</h5>
          </CCardHeader>
          <CCardBody>
            <CChart
              type="line"
              data={{
                labels: empatTH.map((val) => val.tahun),
                datasets: [
                  {
                    label: 'Pendapatan Tahunan',
                    backgroundColor: 'rgba(21, 173, 74, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(21, 173, 74, 1)',
                    pointBorderColor: '#000',
                    data: empatTH.map((val) => val.nominal),
                  },
                ],
              }}
            />
            <div className="mt-2">
              <h6 className="text-center card-title ">Statistika Pendapatan Perusahaan</h6>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}