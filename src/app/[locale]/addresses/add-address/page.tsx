"use client";
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import AddAddressForm from './components/AddAddressForm';

const AddAddress = () => {
  return (
    <>
      <Header />
      <AddAddressForm />
      <Footer />
    </>
  )
}

export default AddAddress;