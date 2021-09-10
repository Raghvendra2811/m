import React from 'react'



const Add = () => {
    return (
        <div>
            <form className="row g-3 m-4">
  <div className="col-12 m-2">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" placeholder="Enter Name"/>
  </div>
  <div className="col-12 m-2">
    <label htmlFor="Genre" className="form-label">Genre</label>
    <input type="text" className="form-control" id="Genre" placeholder="Enter genre"/>
  </div>
  <div className="col-12 m-2">
    <label htmlFor="Production year" className="form-label">Production year</label>
    <input type="text" className="form-control" id="Production year" placeholder="Enter Production year"/>
  </div>
  <div className="col-12 m-2">
    <label htmlFor="Budget" className="form-label">Budget</label>
    <input type="text" className="form-control" id="Budget" placeholder="Enter budget"/>
  </div>
  <div className="col-12 m-2">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
    )
}

export default Add
