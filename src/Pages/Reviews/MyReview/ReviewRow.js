import React from 'react';

const ReviewRow = ({review,handleDelete}) => {
    const{_id,comment,title} = review;
    return (
        <tr className=" border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
            <p>{title}</p>
        </td>
        <td className="p-3">
            <p>{comment}</p>
        </td>
        
        
        
        
        {/* <td className="p-3 ">
            <span className="btn btn-sm px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                <span onClick={ () => handleUpdateStatus(_id)}>{status ? status:'Pending'}</span>
            </span>
        </td> */}
        <td className="p-3 ">
            <span className="px-3 py-1 font-semibold curso">
                <span><button  onClick={() => handleDelete(_id)}>❌</button></span>
            </span>
        </td>
    </tr>

    );
};

export default ReviewRow;