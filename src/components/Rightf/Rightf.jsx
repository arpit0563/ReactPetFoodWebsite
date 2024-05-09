import React from 'react'
import './Rightf.css'
// import Dogfood from '../../image/Dogfood.jpg';
import Food from '../../image/Food.png';

function Rightf() {
  return (
    // <>
      <div className='rightf'>
        <div className='container'>
            <div className='row'>
                {/* *******RIGHT******** */}
                <div className='col-md-7'>
                    <div className='leftf'>
                        <img className ="rightf-img img-fluid" src={Food} />
                    </div>
                </div>

                {/* *******LEFT******** */}
                <div className='col-md-5'>
                    <div className='rightf'>
                        <h2 className='text-center mt-3'>Choosing the right food for your pet</h2>
                        <p className='mt-5'>Let’s get real, you don’t have to be a Veterinary Nutritionist to know good food. But it’s nice to have one on staff. Don’t feed your pets fast food. Nurture them with our slow-cooked recipes for healthier, happier pets.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    // </>
  )
}

export default Rightf
