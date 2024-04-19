import { Trash, Trash2, Upload } from 'lucide-react'
import React, { useState } from 'react'
import { useFileContextType } from './Root'
import { formatBytes } from '../../utils';

export function FileList() {
    const { files } = useFileContextType();

    return (
        <div className='mt-4 space-y-4'>
            {
                files.map((file) => (
                    <div key={file.name} className=' group flex items-start gap-4 rounded-lg border border-zinc-200 p-4'>
                        <div className='rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600'>
                            <Upload className='size-4' />
                        </div>
                        <div className='w-full flex-1 flex flex-col items-start gap-1'>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-sm text-zinc-700' >{file.name}</span>
                                <span className='text-sm text-zinc-500'>{formatBytes(file.size)}</span>
                            </div>
                            <div className='flex gap-1 w-full'>
                                <div className='bg-violet-100 flex-1 rounded-full'>
                                    <div className='size-2 bg-violet-700 w-4/5 rounded-full' />
                                </div>
                                <span className='text-sm text-zinc-400'>80%</span>

                            </div>

                        </div>

                        <button type="button" className='ml-auto rounded-md p-2 hover:bg-zinc-50'>
                            <Trash2 className='size-5 text-zinc-500' />
                        </button>
                    </div>
                ))
            }
        </div>


    )
}
