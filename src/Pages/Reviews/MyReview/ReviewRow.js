import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ReviewRow = ({review,handleDelete,handleUpdate,handleInputChange }) => {
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
        <td className="p-3 pr-0 w-20">
            <span className="px-3 py-1 font-semibold curso">
                <span><button  onClick={() => handleDelete(_id)}>❌</button></span>
                
            </span>
            
        </td>
        <td className='p-0'>
        <label  htmlFor="my-modal-6" className='mr-4 '><FaEdit></FaEdit></label>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-gray-900 mb-3">Please update your Review</h3>
    <form onSubmit={handleUpdate}>
    <input onChange={handleInputChange} type="text" defaultValue={comment} className="input w-full max-w-xs border-sky-400 text-gray-600" />
    
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn"><button type='submit'>update</button></label>
    </div>
    </form>
  </div>
</div>
        </td>
    </tr>

    );
};

export default ReviewRow;