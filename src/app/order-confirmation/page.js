import OrderConfirmation from '@/components/checkout/OrderConfirmation'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

export default function page() {
  return (
    <div className="light-bg">
      <Header  />
      <OrderConfirmation />
      <Footer  />
    </div>
  )
}
