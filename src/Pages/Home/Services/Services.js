import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4'>
            <div className='text-center mb-4'>
                <p className="text-3xl font-bold text-gray-600">Services</p>
                <p className='mt-2'>Check here how can i help you.</p>
                <p className='border-2 border-sky-400 w-16 mt-2 mx-auto'></p>
                
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                
                
               
            </div>
            
        </div>
    );
};

export default Services;