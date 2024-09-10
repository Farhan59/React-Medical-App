import React from 'react'
import Header from '../Components/AdminPage/Header/Header'
import DashboardOverview from '../Components/AdminPage/DashboardOverview/DashboardOverview'
import Footer from '../Components/AdminPage/Footer/Footer'
import Features from '../Components/AdminPage/Features/Features'

const AdminPage = () => {
  return (
    <div>
      <Header />
      <DashboardOverview />
      <Features />
      <Footer />
    </div>
  )
}

export default AdminPage
