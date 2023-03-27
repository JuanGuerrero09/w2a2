import React from 'react'
import {MdAdd} from 'react-icons/md'

export default function PlusIcon(size:number) {
  return (
    <MdAdd style={{padding: '5px'}} size={`${size}rem` || '10rem'}/>
  )
}
