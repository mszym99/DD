import React from 'react'
import './ContactUsForm.css'
function ContactUsForm() {
  return (
    <div className='form-area' style={{float:'right', position:'relative'}}>
        <div className='container'>
            <div className='row'>
                
                <div className='col'>
                    <div className='right'>
                        <h2 className='text-big' font-size=''>Contact Us</h2>
                        <br></br>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName1">Your Name</label>
                            <input type='text' className='form-control' name='name' placeholder='Enter Name'/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Your Phone Number</label>
                            <input type='phone' className='form-control' name='phone' placeholder='Enter Phone Number'/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Message</label>
                            <textarea class="form-control" id="exampleCheck1" rows="10" style={{width: '100%', height: '150px'}} placeholder='Message'></textarea>
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