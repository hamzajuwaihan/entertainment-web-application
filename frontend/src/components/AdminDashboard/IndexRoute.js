import React from 'react'
import CommentBox from '../Comments/CommentBox'
import MessageBox from '../Messages/MessageBox'
import Stats from '../stats/Stats'

function IndexRoute() {
  return (
     <div class="content-wrapper container">
          <div class="page-content">
            <section class="row">
              <div class="col-12 col-lg-12 ">
                <div class="row mb-5">

                  <Stats />

                </div>

                <CommentBox />
              </div>


              <div class="col-12 col-lg-3 ">

                <div class="mb-5"></div>
                {/* <MessageBox /> */}
              </div>
            </section>
          </div>
        </div>
  )
}

export default IndexRoute