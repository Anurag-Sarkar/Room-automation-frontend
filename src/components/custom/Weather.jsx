import { Card } from '../ui/card'
import { IoPartlySunnyOutline } from "react-icons/io5";

const Weather = () => {
  return (
    <Card className="bg-foreground text-background p-3 px-4 flex items-center justify-between">
        <div className='flex items-center gap-5'>
            <div><IoPartlySunnyOutline className='text-4xl '/></div>
            <div>
                <p className='font-light text-sm'>Bhopal, MP</p>
                <p className='font-medium'>Partly Cloudy</p>
            </div>
        </div>
        <div className='text-xl font-medium'>30°C</div>
    </Card>
  )
}

export default Weather