import React, { ChangeEvent, ComponentProps } from 'react'
import { useFileContextType } from './Root';

type ControlProps = ComponentProps<'input'>;


export function Control({ multiple = false, ...props }: ControlProps) {
    const { id, onFiledSelected } = useFileContextType();

    function handleSelectedFiles(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files?.length) {
            return
        }

        const files = Array.from(event.target.files);


        onFiledSelected(files, multiple)
    }

    return (
        <input type="file" onChange={handleSelectedFiles} className="sr-only" id={id} {...props} />
    )
}
