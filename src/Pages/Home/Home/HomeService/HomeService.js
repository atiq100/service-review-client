import React, { useEffect, useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';
import ServiceCard from '../../ServiceCard/ServiceCard';

const HomeService = () => {
    const[loader,setLoader]=useState(true)
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://b6a11-service-review-server-side-atiq100.vercel.app/servicehome")
        .then((res) => res.json())
          
        .then((data) =>{
          setServices(data)
          if(data?.length > 0) {
              setLoader(false)
         }
      
      }) 
     
    }, []);
    return (
      <>
      {loader ? <Loader></Loader> :
      <div className="mt-4">
        <div className="text-center mb-4">
          <p className="text-3xl font-bold text-gray-600">Services</p>
          <p className="mt-2">Check here how can i help you.</p>
          <p className="border-2 border-sky-400 w-16 mt-2 mx-auto"></p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 justify-items-center">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>}
      </>
    );
};

export default HomeService;