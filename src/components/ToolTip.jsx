import React from 'react'

export default function ToolTip({ message, children }) {
  return (
    <div className='group relative flex whitespace-nowrap'>
        {children}
        <span className='z-10 absolute top-8 scale-0 transition-all border-2 rounded-md w-auto flex items-center justify-center bg-white p-2 text-xs text-black group-hover:scale-100'>
            {message}
        </span>
    </div>
  )
}
