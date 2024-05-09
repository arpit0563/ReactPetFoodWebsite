import React from 'react'
import './Category.css'
import parrot from '../../image/parrot.jpg';
import fish from '../../image/fish.jpg';
import catedog from '../../image/catedog.jpg';
import cat from '../../image/cat.jpg';
import posterdog from '../../image/posterdog.jpg';
import postercat from '../../image/postercat.jpg';

function Category() {
  return (
    <>
        <div className="category text-center">
            <h2>Top <span>Categories</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, labore.</p>
            <div className="container poster-c">
                <div className="row cat-row">
                    <div className="col-md-3">
                        <div className="category-col">
                            <img src={parrot} alt="Parrot" className='img-fluid category-img' />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-col">
                        <img src={fish} alt="Parrot" className='img-fluid category-img' />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-col">
                        <img src={catedog} alt="Parrot" className='img-fluid category-img' />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-col">
                        <img src={cat} alt="Parrot" className='img-fluid category-img' />
                        </div>
                    </div>
                </div>
           
            <div className="poster">
                <div className="container">
                    <div className="row poster-img">
                        <div className="col-md-5 poster1 text-white">
                            <div className="offer">
                                <h1>Big Sale</h1>
                                <h1>All Pets Products</h1>
                                <span>Save up to 70%</span><br/>
                                <button className='poster-btn text-white'>Shop now</button>
                            </div>
                        </div>
                        <div className="col-md-5 poster2 text-white">
                           <div className="offer">
                                <h1>Save Up To 25%</h1>
                                <h1>On Every Order</h1>
                                <span>Pets Food, Medicine And Equipments</span>
                                <br/><button className='poster-btn text-white'>Shop now</button>
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

export default Category
