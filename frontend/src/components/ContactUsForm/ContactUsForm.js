import React from 'react'
import './ContactUsForm.css'
function ContactUsForm() {
  return (
    <div className='form-area'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='left'>
                        <h2><span>Contact Us For</span> <br></br>Business Inquries</h2>
                    </div>
                </div>
                <div className='col'>
                    <div className='right'>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName1">Your Name</label>
                            <input type='text' className='"form-text' name='name' placeholder='Enter Name'/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Your Phone Number</label>
                            <input type='phone' className='"form-text' name='phone' placeholder='Enter Phone Number'/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            
                        </div>
                        <div class="form-check">
                            <input type="textarea" class="form-check-input" id="exampleCheck1" placeholder='Message'/>  
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsForm