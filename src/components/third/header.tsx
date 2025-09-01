import React from 'react'

export default function Header() {
  return (
    <div className='bg-black h-screen w-screen '>
      <div className='flex  items-center gap-10 bg-stone-200 mx-5 p-8 rounded-3xl'>
        <div className='flex gap-2'>
            <div>icon</div>
            <div><h1>ava</h1></div>
        </div>
        <div className='flex items-center gap-5 border-2 px-4 rounded-2xl py-2 capitalize'>
            <div>home</div>
            <div>products</div>
            <div>about</div>
            <div>contact</div>
        </div>
      </div>
              <div className='flex gap-3'>
            <div><button>stores</button></div>
            <div><button>contact us</button></div>
        </div>
    </div>
  )
}
