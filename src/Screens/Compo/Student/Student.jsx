import React from 'react'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"green"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button style={{color:"white",backgroundColor:"black"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Profile Management
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
          <Link className="" to="studentRegis"><li>Student Registeration</li></Link>
          
          <Link className="" to="studentlist"><li>Student List</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

export default Student
