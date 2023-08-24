import React from 'react'

const SingleProduct = ({title,description,price,images}) => {
    return (
        <>
        <div className="col-md-3 mb-4">
            <div className="card p-4 border-0 shadow">
                <img style={{width:'100%',height:'200px',objectFit:'contain'}} src={images[0]} alt="" />
                <h3>{title}</h3>
            </div>
        </div>
        </>
    )
}

export default SingleProduct