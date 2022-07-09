import React from 'react'

import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  DocsExample,
  CInputGroup,
  CInputGroupText,
  CForm,
  CFormSelect,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
      
import { CButton } from '@coreui/react'

export default function EditProduk(produkWillBeEdited) {
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <h5 className="text-center">edit data produk</h5>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormInput
                className="my-3"
                type="text"
                id="exampleFormControlInput1"
                label="Nama Produk"
                placeholder=""
                // text="Must be 8-20 characters long."
                // aria-describedby="exampleFormControlInputHelpInline"
              />
              <CFormInput
                className="my-3"
                type="text"
                id="exampleFormControlInput1"
                label="harga"
                placeholder=""
                // text="Must be 8-20 characters long."
                // aria-describedby="exampleFormControlInputHelpInline"
              />
              <CFormSelect aria-label="Default select example" className="my-3">
                <option>Kategori</option>
                <option value="1">kaos</option>
                <option value="2">batik</option>
                <option value="3">Gantungan Kunci</option>
              </CFormSelect>
              <div className="text-center">
                <CButton align="center" className="">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
