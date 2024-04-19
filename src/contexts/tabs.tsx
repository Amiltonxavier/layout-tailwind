import { createContext, useContext, useState } from "react";


type TabsContextTypes = {
    activaTab: number;
    handleActiveTabs: (numberTabs: number) => void
}

type TabProps = {
    children: React.ReactNode
}

export const TabsContext = createContext({} as TabsContextTypes);

export function Tab({children}: TabProps) {
    const [activaTab, setActiveTabs] = useState(1);
    function handleActiveTabs(numberTabs: number){
        setActiveTabs(numberTabs);
    }
  return (
    <TabsContext.Provider value={{ activaTab, handleActiveTabs }}>
        {children}
    </TabsContext.Provider>
  )
}

export const useTabsContextTypes = () => useContext(TabsContext);
