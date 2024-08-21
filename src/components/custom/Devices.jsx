import React, { useRef, useState } from 'react'
import { Card } from '../ui/card'
import axiosInstance from '@/utils/axios'
import { Switch } from "@/components/ui/switch"
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Devices = ({id,icons,name,state}) => {

    const [status, setstatus] = useState(state)
    const [loading, setLoading] = useState(false)
    const iconRef = useRef(null);

    const notify = () => toast.error('Device is not responding', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    async function changeState(){
        try{
            setLoading(true)
            await axiosInstance.post(`/${id}`,{state:status ? 1 : 0})
            setLoading(false)
            setstatus(!status)
        }catch(err){
            notify()
            setLoading(false)
            console.log(err)
        }
    }
    return (
        <>
            <Card onClick={changeState} className={`transition-all duration-300 shadow-none flex flex-col justify-between p-4 w-[47.5%] h-[40vw] `}>
                <div className='flex justify-between items-center'>
                    <div ref={iconRef} className={`transition duration-1000 text-4xl ${status ? "opacity-100" : "opacity-30"}`}>{icons}</div>
                    <Switch checked={status} id="airplane-mode" />
                </div>
                <div className='flex justify-between gap-'>
                    <div className='font-medium text-md'>{name}</div>
                    <div><BeatLoader size={5} loading={loading}/></div>
                </div>
            </Card>
        </>
    )
}

export default Devices