import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import ServiceItems from './ServiceItems';
import { useQuery } from '@tanstack/react-query';
import PrimarySpinner from '../../../assets/Spinners/PrimarySpinner';

const AllServices = () => {
    useTitle("All Services")
    // const [services , setServices] = useState([]);
    // useEffect( () => {
    //     fetch(`https://nexa-forest-server-side.vercel.app/all-services`)
    //     .then(res => res.json())
    //     .then(data=> setServices(data))
    //     .catch(err => console.error(err))
    // }, [])
    const url = `https://nexa-forest-server-side.vercel.app/all-services`;
    const { data: services = [], isLoading } = useQuery({
        queryKey: ['all-services'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <PrimarySpinner></PrimarySpinner>
    }

    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='min-h-screen'>
                <div className='container mx-auto grid grid-cols-1'>
                    <div className='py-12 mb-6'>
                        <div className="text-center">
                            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                ONLINE GARDEN CENTER
                                <br></br>
                                PLANTS DELIVERED TO YOUR DOOR</h1>
                            <p className="text-sm lg:text-lg max-w-screen-md px-2 md:px-8 lg:px-0 md:mx-auto mt-4 text-gray-500">
                                Browse our online garden centre from the comfort of your home, knowing you'll be provided only the healthiest material and plants we have available. We offer a huge selection of locally grown trees, shrubs and perennials that we'll deliver to your door free of charge!
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            services.map(service => <ServiceItems key={service._id} service={service}></ServiceItems>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;