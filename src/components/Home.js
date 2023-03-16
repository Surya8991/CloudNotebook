import Notes from './Notes';

export const Home = () => {

    return (
        <div>
            <div className="container my-3">
            <h2 className='text-center'>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Note Title</strong></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea type="text" rows={8} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
            </div>
            <div className='container my-3'>
            <h2 className='text-center'>Your Notes</h2>
            <Notes/>
            </div>
        </div>
    )
}