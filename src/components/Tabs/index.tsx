import React, { ComponentProps } from 'react'
import { useTabsContextTypes } from '../../contexts/tabs';


type Data = {
  label: string
  values: number
}

type TabsProps = ComponentProps<'button'> & {
  data: Data[]


};
export function Tabs({ data, ...props }: TabsProps) {

  const { activaTab, handleActiveTabs } = useTabsContextTypes();

  const handleClick = (value: number) => {
    handleActiveTabs(value);
  }

  return (
   
    <>
      {
        data.map((item) => (
          <button
            key={item.values}
            {...props}
            type='button'
            id={item.label}
            onClick={() => handleClick(item.values)}
            className={`px-3 py-2 font-semibold text-lg/2 border-b hover:border-violet-500 hover:text-violet-700 ${activaTab === item.values ? "text-violet-500 border-violet-500" : "text-zinc-600"}`}>{item.label}</button>
        ))
      }
    </>
  )
}
