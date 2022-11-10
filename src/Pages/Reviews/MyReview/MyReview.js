import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    
    const {user,logout}=useContext(AuthContext)
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            // headers:{
            //     authorization: `Bearer ${localStorage.getItem('token')}`
            // }
        })//specific user tar order dekte
        .then(res=>{
            // if(res.status === 401 || res.status === 403){
            //    return logout()
            // }
            return res.json()
        })
        .then(data=>{
            setReviews(data)
            
            
        })
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure,you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE',
                
                    // headers:{
                    //     authorization: `Bearer ${localStorage.getItem('token')}`
                    // }
                
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining)
                }
                console.log(data);
            })
        }
    }
    return (
        <>
    {reviews?.length < 0 ? <p className='text-center text-xl text-red-500'>No reviews were added at the middle of the page</p> :
        <div>
             <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                
	<h2 className="mb-4 text-2xl font-semibold text-black">you put {reviews.length}  Reviews</h2>
	<div className="overflow-x-hidden">
		<table className="w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-24"/>
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Service name</th>
					<th className="p-3">My comment</th>
					
					
					<th className="p-3">Action</th>
				</tr>
			</thead>
			<tbody>
                {
				reviews.map(review=><ReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                //handleUpdateStatus={handleUpdateStatus}
                ></ReviewRow>)
}
			</tbody>
		</table>
	</div>
</div>
        </div>}
        </>
    );
};

export default MyReview;