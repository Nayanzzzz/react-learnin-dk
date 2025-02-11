import React from 'react'

function MediaQuery() {
  return (
    <div className='flex flex-col sm:flex-row gap-4 md:gap-3'>

        <div className='h-[200px] w-[200px] bg-red-500  md:h-[300px] hidden sm:flex'/>
        <div className='h-[200px] w-[200px] bg-blue-500'/>
      
    </div>
  )
}

export default MediaQuery
