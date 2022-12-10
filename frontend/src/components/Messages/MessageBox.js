import React from 'react'
import Message from './Message'

function MessageBox() {
  return (
    <> <div class="card">
    <div class="card-header">
        <h4 class="text-muted">Recent Messages</h4>
    </div>
    <div class="card-content pb-4">
        <Message/>
        <Message/>
        <Message/>
        
        <div class="px-4">
            <button class='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Start
                Conversation</button>
        </div>
    </div>
</div></>
  )
}

export default MessageBox