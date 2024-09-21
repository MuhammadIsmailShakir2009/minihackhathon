import React from 'react'

const Payment = () => {
  return (
    <>
    <h1>Payment method</h1>
    <from>
        <label >Name</label>
        <input placeholder="Name" type="text" />
        <label >Email</label>
        <input placeholder="email" type="email" />
        <label >amount</label>
        <input placeholder="amount" type="number"/>
    </from>
    </>
  )
}

export default Payment