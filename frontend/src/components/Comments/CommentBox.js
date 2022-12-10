import React from 'react'
import Comment from './Comment'

function CommentBox() {
  return (
    <><div class="col-12 col-xl-8">
    <div class="card">
        <div class="card-header">
            <h4 class="text-muted">Latest Comments</h4>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-lg">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Comment/>  
                        <Comment/>  
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div></>
  )
}

export default CommentBox