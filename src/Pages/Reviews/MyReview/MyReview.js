import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    useTitle("myreview")
    const {user,logout}=useContext(AuthContext)
    const [reviews,setReviews] = useState([])
    const storedReview = useLoaderData()
    const [review,setReview] =useState(storedReview)
    console.log(storedReview)

    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-atiq100.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('doctor-token')}`
            }
        })//specific user tar order dekte
        .then(res=>{
            if(res.status === 401 || res.status === 403){
               return logout()
            }
            return res.json()
        })
        .then(data=>{
            setReviews(data)
            
            
        })
    },[user?.email,logout])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure,you want to cancel this order');
        if(proceed){
            fetch(`https://b6a11-service-review-server-side-atiq100.vercel.app/reviews/${id}`,{
                method:'DELETE',
                
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('doctor-token')}`
                    }
                
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining)
                }
                console.log(data);
            })
        }
    }
    // const handleUpdate = (event,id) =>{
    //     event.preventDefault();
    //     console.log(review);
    //     fetch(`http://localhost:5000/reviews/${id}`,{
    //         method:'PATCH',
    //         headers: {
    //             'content-type':'application/json'
    //         },
    //         body: JSON.stringify({comment:''})

    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.modifiedCount>0){
    //             const remaining = reviews.filter(rev => rev._id !== id);
    //             const approving = reviews.find(rev => rev._id === id);
                

    //             const newReview = [approving, ...remaining];
    //             setReview(newReview)
    //             alert('Review updated successfully')
    //             event.target.reset()
    //         }
    //         //console.log(data);
    //     })

    // }
    const handleInputChange = event=>{
        const value = event.target.value;
        const field = event.target.name;
        const newReview = {...review}
        newReview[field]=value;
        setReview(newReview)
        console.log(newReview);
       
    }
    return (
    //     <>
    // {reviews?.length < 0 ? <p className='text-center text-xl text-red-500'>No reviews were added at the middle of the page</p> :
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
                //handleUpdate={handleUpdate}
                handleInputChange={handleInputChange}
                //handleUpdateStatus={handleUpdateStatus}
                ></ReviewRow>)
}
			</tbody>
		</table>
	</div>
</div>
        </div>
        
    );
};

export default MyReview;