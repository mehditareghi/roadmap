import React from 'react';

function SimpleProgressBar({ progress }: any) {
  return (
    <div className='flex items-center'>
      <div className='w-full h-2 border bg-white border-black'>
        <div
          className='h-full whitespace-nowrap bg-blue-500'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className='ml-2 text-xs'>{`${progress}%`}</div>
    </div>
  );
}

export default SimpleProgressBar;
