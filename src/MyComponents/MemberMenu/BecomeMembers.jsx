import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const BecomeMembers = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
},[])
    return (
        <div>
            <section className='bg-dark' id="be-member">
            <div className="container ">
                <div className="row text-center py-5 text-light">
                    <div data-aos="fade-up" className="col text-center py-5">
                        <h1>Be a Member</h1>
                        <p>Be a part of BUP CF Family</p>
                    </div>
                </div>
            </div>
            </section>

            <section data-aos="zoom-in-up" id="form">
                <div className="container border border-2 my-5">

                
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <form>
                        <h2 className='text-center mt-5'>Membership Details</h2>
                        <p className='text-center'>You Will receive an confirmation</p>
                        <hr/>
                        <div className="form-group mt-5">
    <label  for="exampleInputEmail1">Name</label>
    <input required type="name" className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input required type="email" className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Phone</label>
    <input required type='number' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group mb-4">
    <label for="exampleFormControlSelect1">Blood Group</label>
    <select required class="form-control" id="exampleFormControlSelect1">
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>O+</option>
      <option>O-</option>
      <option>AB+</option>
      <option>AB-</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Current Address</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Permanent Address</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Department</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Skills</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Achievement</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Linkedin Profile Link</label>
    <input type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Facebook Profile Link
</label>
    <input required type='text' className="mb-4 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Biography</label>
    <textarea required className="mb-4 form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  
  
  <button  type="submit" className="btn btn-primary mb-4">Submit</button>
</form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default BecomeMembers;