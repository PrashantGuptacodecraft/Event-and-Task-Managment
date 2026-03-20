import React from 'react'

const Task = () => {
  return (
    <div>
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
  
  <button
    type="button"
    className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
    aria-label="Close"
  ></button>

  <svg className="bi mt-5 mb-3" width="48" height="48" aria-hidden="true">
    <use xlinkHref="#check2-circle"></use>
  </svg>

  <h1 className="text-body-emphasis">Do your task that u have assign</h1>

  <p className="col-lg-6 mx-auto mb-4">
    I will check  the progress report on saturday that what u have done .
  </p>

  <button className="btn btn-primary px-5 mb-5" type="button">
   Do ur Task Fast
  </button>

</div>
    </div>
  )
}

export default Task
