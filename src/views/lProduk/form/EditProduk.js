import React from 'react'

import {CCol, CRow,CCard,CCardHeader,CCardBody,DocsExample,CInputGroup,CInputGroupText,CFormInput,CFormLabel,CFormTextarea} from "@coreui/react"

export default function EditProduk() {
 return (
    <CRow>
        <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Place one add-on or button on either side of an input. You may also place one on both
              sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s outside the
              input group.
            </p>
            
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient&#39;s username"
                  aria-label="Recipient&#39;s username"
                  aria-describedby="basic-addon2"
                />
                <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
              </CInputGroup>
              <CFormLabel htmlFor="basic-url">Your vanity URL</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
                <CFormInput id="basic-url" aria-describedby="basic-addon3" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput aria-label="Amount (to the nearest dollar)" />
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username" aria-label="Username" />
                <CInputGroupText>@</CInputGroupText>
                <CFormInput placeholder="Server" aria-label="Server" />
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>With textarea</CInputGroupText>
                <CFormTextarea aria-label="With textarea"></CFormTextarea>
              </CInputGroup>
           
          </CCardBody>
        </CCard>
        </CCol>
    </CRow>
  )
}
