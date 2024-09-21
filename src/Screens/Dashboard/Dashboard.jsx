import React from 'react'
import Sidebar from '../Compo/Sidebar/Sidebar'
import Navbar from '../Compo/Navbar'
import RegistrationForm from '../Compo/Student/RegisterationForm/Rform'
import StudentList from '../Compo/Student/StudentList/StudentList'
import { useLocation } from 'react-router-dom'
import Student from '../Compo/Student/Student'
import AdmissForm from '../Compo/Admission/AdmisForm/AdmissForm'
import Payment from '../Compo/payment/payment'


const Dashboard = () => {
  let location = useLocation()
  return (
    <>
    
       <Sidebar />  
       {location.pathname === "/dash" ? <StudentList /> : null}
       {location.pathname === "/dash" ? <AdmissForm /> : null}
       {location.pathname === "/dash" ? <Payment/> : null}
       {/* <StudentList/> */}
    </>
  )
}

export default Dashboard



