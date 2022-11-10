import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext)

    const handleFeedback=(event)=>{
        const name = user?.displayName;
        const comment = event.target.comment.value;
        const photo = user?.photoURL;
    
    const feedback={
        
        
        reviewer: name,
        comment,
        photo
    }

    fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type': 'application/json',
            
        },
        body: JSON.stringify(feedback)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('order placed successfully')
            comment.reset();
        }
    })
    .catch(err=>console.log(err))
}
    return (
        <div className=" w-full md:w-3/5 p-8 shadow-sm rounded-xl lg:p-3  dark:text-gray-900">
	
		
		<form onSubmit={handleFeedback}>
        <div className="flex justify-between justify-items-center items-center w-full">
			<textarea  placeholder="Message..." name='comment' className="p-4 h-16 mr-2 flex-grow rounded-md resize-none dark:text-gray-900 dark:bg-gray-100"></textarea>
			<button type="submit" className="py-4 px-2 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-sky-400">Leave feedback</button>
		</div>
        </form>
	
	
</div>
    );
};

export default AddReview;