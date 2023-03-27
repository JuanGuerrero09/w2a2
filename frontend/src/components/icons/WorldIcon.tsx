import { GiEarthAmerica } from 'react-icons/gi'
import { IoEarthSharp, IoEarthOutline, IoEarth } from 'react-icons/io5'

interface WorldIconProps {
  size?: number
}

export default function WorldIcon({size}:WorldIconProps) {
  return (
    <>
    {/* <GiEarthAmerica size='10em'/> */}
    <IoEarth size={size || '10rem'}/>
    {/* <IoEarthOutline size='10em'/> */}
    {/* <IoEarthSharp size='10em'/> */}
    </>
  )
}
