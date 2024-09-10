import React from 'react'
import Header from '../Components/AdminPage/Header/Header'
import UserManagement from '../Components/UserManagementPage/UserManagement/UserManagement'
import Footer from '../Components/AdminPage/Footer/Footer'

const UserManagementPage = () => {
  return (
    <div>
      <Header/>
      <UserManagement/>
      <Footer/>
    </div>
  )
}

export default UserManagementPage
