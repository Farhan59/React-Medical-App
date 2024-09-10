import React from 'react'
import Header from '../Components/AdminPage/Header/Header'
import SecurityAccessControl from '../Components/SecurityAccessControlPage/SecurityAccessControl/SecurityAccessControl'
import Footer from '../Components/AdminPage/Footer/Footer'

const SecurityAccessControlPage = () => {
  return (
    <div>
      <Header/>
      <SecurityAccessControl/>
      <Footer/>
    </div>
  )
}

export default SecurityAccessControlPage
