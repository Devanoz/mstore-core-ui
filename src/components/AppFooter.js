import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright &copy; </span>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          2022 M-Store
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          FantasticFour.Inc
        </a>
      </div>
    </CFooter>
    //cek commit
  )
}

export default React.memo(AppFooter)
