import { UploadCloud } from 'lucide-react'
import React, { useContext } from 'react'
import { useFileContextType } from './Root'



export function Trigger() {
    const { id } = useFileContextType()
    return (
        <label htmlFor={id} className="group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-600 shadow-sm group-hover:border-violet-50 group-hover:bg-violet-100 hover:border-violet-50 hover:bg-violet-25 hover:text-violet-500">
            <span className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2">
                <UploadCloud className="size-5 text-zinc-600 group-hover:text-violet-600" />
            </span>
            <div className="text-sm">
                <span><span className="font-semibold text-violet-700">Click to upload</span> or drag and drop</span>
                <span className="text-xs">SVG,PNG, JPG or GIF(max, 800x400px)</span>
            </div>
        </label>
    )
}
