import CheckoutPage from '@/components/checkout/Checkout'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

export default function Checkout() {
  return (
    <div>
      <Header/>
      <CheckoutPage />
      <Footer />
    </div>
  )
}
