import React from 'react'
import "../Style/Her.scss"
// import maxwidth from "../Images/max-width_header.jpg"
import  shopping from "../Images/cart.png"

function Hero() {
  return (
    <div>
      <div className='mnb'>
        <div className='container'>
          <div className='herosection'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--4">
                <div class="cardone">
                  <div class="card-body">
                    <h5 class="card-title">women's</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--8">
                <div class="card-img">
                  <img src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?w=2000" class="card-img-top" alt="" />
               {/* <img src={shopping}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='awq herosection'>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="card-img">
              <img src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?w=2000" class="card-img-top" alt="" />
              {/* <img src={shopping}/> */}
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="cardone">
              <div class="card-body">
                <h5 class="card-title">women's</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero