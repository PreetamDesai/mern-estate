import React from 'react'

export default function AddAdoption() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      Enter Details
    </h1>
    <form className='flex flex-col sm:flex-row'>
      <div className='flex flex-col gap-4 flex-1'>
        <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required />
        <input type="text" placeholder='ownername' className='border p-3 rounded-lg' id='ownername' maxLength='62' minLength='10' required />
        <input type="text" placeholder='category' className='border p-3 rounded-lg' id='category' required />
        <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id='Description' required />
        <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='Address' required />
        <input type="text" placeholder='Age (enter nil if unkown)' className='border p-3 rounded-lg' id='Age' required />
        
      </div>
      
    </form>
    </main>
  )
}
