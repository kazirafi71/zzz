import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Notices = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
},[])
    return (
        <div>
            <div className="py-5" style={{backgroundColor:'#FF849C', fontFamily:'Quicksand', fontWeight:'600'}}>
            <h1 className='text-light m-5 p-4 '>Notices</h1>
            
            </div>
            <div className="container">
                <div  className="row ">
                <h1  style={{fontFamily:'Quicksand',fontWeight:'700'}} className='text-center mt-5'>Notices</h1>
                    <div  className="col-md-8 mx-auto my-5 py-5">
                    <div class="accordion" id="accordionExample">
  <div   class="card">
    <div class="card-header bg-primary" id="headingOne">
      <h2 class="mb-0">
        <button class="text-light btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Notice #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="text-light card-body bg-success">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
      <div class="text-enter card-footer text-muted">
    <p className='text-center'>1 days ago</p> 
      </div>

    </div>
  </div>
  <div  class="my-5 card">
    <div class="bg-warning card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="text-light btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Notice #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="text-light card-body bg-danger">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
      
    </div>
    <div class="text-enter card-footer text-muted">
    <p className='text-center'>2 days ago</p> 
      </div>
    
  </div>
  <div  className="my-5 card">
    <div class="bg-info card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="text-light btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Notice #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body bg-warning">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
      <div class="text-enter card-footer text-muted">
    <p className='text-center'>3 days ago</p> 
      </div>
    </div>
  </div>
  <div className="my-5 card">
    <div class="bg-secondary card-header" id="headingfour">
      <h2 class="mb-0">
        <button class="text-light btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        Notice #4
        </button>
      </h2>
    </div>
    <div id="collapsefour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body bg-warning">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
      <div class="text-enter card-footer text-muted">
    <p className='text-center'>4 days ago</p> 
      </div>
    </div>
  </div>
  <div  className="my-5 card">
    <div className="bg-danger card-header" id="collapsefive">
      <h2 class="mb-0">
        <button class="text-light btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
        Notice #5
        </button>
      </h2>
    </div>
    <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
      <div class="card-body bg-warning">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
      <div class="text-enter card-footer text-muted">
    <p className='text-center'>6 days ago</p> 
      </div>
    </div>
  </div>
 
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notices;