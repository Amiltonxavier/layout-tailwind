import React, { ComponentProps, createContext, useContext, useId, useState } from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContextTypeProps = {
  id: string,
  files: File[]
  onFiledSelected: (files: File[], multiple: boolean) => void
}

const FileInputContextType = createContext({} as FileInputContextTypeProps)


export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([])

  function onFiledSelected(files: File[], multiple: boolean){
    if(multiple){
      setFiles((state) => [...state, ...files])
    }else{
      setFiles(files)
    }
  }

  return (
    <FileInputContextType.Provider value={{ id,files ,onFiledSelected }}>
      <div {...props} />
    </FileInputContextType.Provider>

  )
}

export const useFileContextType = () => useContext(FileInputContextType);
