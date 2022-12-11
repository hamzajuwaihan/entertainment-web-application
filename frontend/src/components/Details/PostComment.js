
function PostComment() {
    return (
        <>
        
<div>

  {/* Main Body */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-5 col-md-6 col-12 pb-4">
          <h1>Comments</h1>
          {/* <div className="comment mt-4 text-justify float-left">
            <img src="https://i.imgur.com/yTFUilP.jpg" alt className="rounded-circle" width={40} height={40} />
            <h4>Jhon Doe</h4>
            <span>- 20 October, 2018</span>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
          </div> */}

        </div>
        <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
          <form id="algin-form">
            <div className="form-group">
              <h4>Leave a comment</h4>
              <label htmlFor="message">Message</label>
              <textarea name="msg" id msg cols={30} rows={5} className="form-control" style={{backgroundColor: 'black'}} defaultValue={""} />
            </div>
            <div className="form-group">
              <button type="button" id="post" className="btn">Post </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>


        </>
    )}
        export default PostComment