import React from 'react'
import './Model.css'
import { Modal } from 'bootstrap'

function Model() {
  return (
    <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                <div className="modal-header py-4">
                    <h5 className="modal-title" id="staticBackdropLabel">Search Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div className="container">
                    <div className="row">
                        <div className='search_input col md-4 pt-5'>
                            <input type='search'className='form-control text-center' placeholder='Enter your product'></input>
                        </div>
                    </div>
                   </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Model
