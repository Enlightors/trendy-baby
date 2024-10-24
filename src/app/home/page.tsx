import Products from '@/src/components/Products'
import React from 'react'
import Footer from '@/src/components/Footer'
import Header from'@/src/components/Header'
import Awards from '@/src/components/Awards'


export default function Home() {
  return (
    <div>
      <Header/>
      <Products/>
      <Awards/>
      <Footer/>
      </div>
  
  )
}
