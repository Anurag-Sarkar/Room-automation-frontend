import Devices from '@/components/custom/Devices';
import Weather from '@/components/custom/Weather';
import { AiOutlineBulb } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axios';

const Home = () => {
    const [data, setData] = useState({});
    const [devices, setDevices] = useState({});
    const [temperature, setTemperature] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const response = await axiosInstance.get("/");
                setDevices(response.data.devices);
                setTemperature(response.data.temperature.temperature[0])
            } catch (err) {
                console.log(err);
                toast.error('Server error', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }

        async function getStatus() {
            try {
                const response = await axiosInstance.get("/status");
                setData(response.data.data);
            } catch (err) {
                console.log(err);
                toast.error('Connection to device failed', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
        getData();
        getStatus();
    }, []);

    return (
        <div>
            <ToastContainer className="w-3/4 top-4 left-1/2 overflow-hidden transform -translate-x-1/2 rounded" />
            <h1 className="mb-8 font-medium text-2xl text-card-foreground leading-7">Hello Anurag <br /></h1>
            <Weather />
            <div className='mt-8'>
                <p>Favorites</p>
                <div className='flex mt-2 flex-shrink-0 flex-wrap gap-[5%] gap-y-5'>
                    {Object.keys(devices).length > 0 && Object.keys(data).length > 0 ? (
                        Object.keys(devices).map((device, idx) => {
                            return (
                                <Devices
                                    id={device}
                                    key={idx}
                                    state={data[device] === 'LOW'} // Assuming 'LOW' means ON
                                    name={devices[device]}
                                    icons={<AiOutlineBulb />}
                                />
                            );
                        })
                    ) : Object.keys(devices).length > 0 ? (
                        Object.keys(devices).map((device, idx) => {
                            return (
                                <Devices
                                    id={device}
                                    key={idx}
                                    state={false} // Assuming 'LOW' means ON
                                    name={devices[device]}
                                    icons={<AiOutlineBulb />}
                                />
                            );
                        })
                    ) :
                        'Loading'
                    }
                </div>
            </div>
            <div className='flex justify-between translate-x-[-50%] left-[50%] bottom-5 absolute w-[80%]'>
                <div className='text-lg font-medium'>Temperature</div>
                <div className='text-xl font-medium'>{temperature} °C</div>
            </div>
        </div>
    );
}

export default Home;