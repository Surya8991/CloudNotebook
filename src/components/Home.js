import React from 'react'
import Notes from './Notes'
  
export const Home = () => {
    return (
        <>
            <div className='container my-3 '>
                <h1 className='text-center'>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><strong>Note Title</strong></label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><strong>Description</strong></label>
                        <textarea type="text" rows={8} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
            <div className='container my-3'>
                <Notes />
            </div>
        </>
    )
}