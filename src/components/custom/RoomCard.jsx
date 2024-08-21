import React from 'react'
import { Card } from '../ui/card'

const RoomCard = ({name}) => {
  return (
    <div>
        <Card className="p-1 px-4 rounded">
            <p className='whitespace-nowrap'>{name}</p>
        </Card>
    </div>
  )
}

export default RoomCard