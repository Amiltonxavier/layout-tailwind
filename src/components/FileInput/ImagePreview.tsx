import { User } from 'lucide-react'
import { useFileContextType } from './Root'
import { useMemo } from 'react';


export function ImagePreview() {
    const { files } = useFileContextType();

    const previewUrl = useMemo(() => {
        if(files.length === 0 ){
            return null
        }
        return URL.createObjectURL(files[0])
    }, [files]);

    if(previewUrl === null){
        return (
            <div className="flex items-center justify-center size-16 rounded-full bg-violet-50">
                <User className="size-8 text-violet-500" />
            </div>
        )
    }else{
        return(
            <img src={previewUrl} alt="" className='size-16 rounded-full object-cover' />
        )
    }
    
}
