"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React, {useEffect,useState} from 'react'
import globalApi from '../_utils/globalApi'
import Image from 'next/image'

function CategorySearch() {
 const [categoryList,setCategoryList]=useState([]);

  useEffect(()=>{
    getCategoryList()

  },[])
 const getCategoryList=()=>{
  globalApi.getCategory().then(resp=>{
    console.log(resp.data.data);
    setCategoryList(resp.data.data);

  })
 }


  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-4'>
        <h2 className='font-bold text-4xl tracking-wide'>Search 
        <span className='text-blue-400'> Coaches</span></h2>
        <h2 className='text-gray-500 text-xl'> Search Your Coach and Book Appointment in one click</h2>
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search..." />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Search</Button>
    </div>
      {/* Display List of Category */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {categoryList.map((item,index)=>index<6&&(
        <div key={index} className='flex flex-col text-center items-center
        p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
        gap-2 hover:scale-110 transition-all ease-in-out'>
          <Image  src={item.attributes?.Icon?.data.attributes?.url}
          alt='icon'
          width={70}
          height={60} />
          <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
          </div>
          
      ))}
      </div>
    </div>
  )
}

export default CategorySearch
