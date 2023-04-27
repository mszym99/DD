import React from 'react'
import './ContactUsForm.css'
function ContactUsForm() {
  return (
    <div className='form-area' style={{float:'right', position:'relative'}}>
        <div className='containerContactForm'>
            <div className='row'>
                
                <div className='col'>
                    <div className='right'>
                        <h2 className='text-big' font-size=''>Contact Us</h2>
                        <br></br>
                        <form action="https://formsubmit.co/dynamicdetailingofficial@gmail.com" method="POST">
                        <div class="form-group">
                            <label for="exampleInputName1">Your Name</label>
                            <input type='text' className='form-control' name='name' placeholder='Enter Name' required/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Your Phone Number</label>
                            <input type='phone' className='form-control' name='phone' placeholder='Enter Phone Number' required/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter Email" required/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Message</label>
                            <textarea class="form-control" id="exampleCheck1" rows="10" name='message' style={{width: '100%', height: '150px'}} placeholder='Message' required></textarea>
                       </div>
                        <button type="submit" className="btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsForm