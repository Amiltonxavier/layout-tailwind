import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { InputControl, InputIcon, InputRoot } from "./components/Input";
import { ChevronDown, Mail } from "lucide-react";
import * as FileInput from "./components/FileInput";
import * as Select from './components/Select';
import { CONSTANTS } from "./constants";
import { Tabs } from "./components/Tabs";
import { Tab, useTabsContextTypes } from "./contexts/tabs";
function App() {
  const [openSideBar, setOpenSidebar] = useState(true);

  const { activaTab }  = useTabsContextTypes()

  return (
    <>
    
        <div className={`min-h-screen grid sm:grid-cols-app w-full `}>
          <Sidebar />
          <main className="min-h-screen px-8 mt-5">
            <div className="container mx-auto ">
              <section className="rounded-lg shadow-sm min-h-screen">
                <header>
                  <h1 className="flex text-zinc-900 text-3xl font-medium">Settings</h1>
                </header>
                <div className="flex gap-2 border-b border-zinc-300 mt-5">

                  <Tabs data={CONSTANTS.TABSLIST} />
                 
                </div>

                {
                  activaTab == 1 && (
                    <div className="flex flex-col mt-6">
                      <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
                        <div className="space-y-1">
                          <h2 className="font-medium text-zinc-900 text-lg">Personal info</h2>
                          <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
                          <button type="button" form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 hover:bg-violet-700 text-white">save</button>
                        </div>
                      </div>
                      <form action="" id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
                        <div className="grid grid-cols-form gap-3">
                          <label htmlFor="firstName" className="text-zinc-700 font-medium text-sm">Full name</label>
                          <div className="grid gap-6 grid-cols-2">
                            <InputRoot>
                              <InputControl id="firstName" defaultValue={"Amilton Xavier"} />
                            </InputRoot>
                            <InputRoot>
                              <InputControl defaultValue={"José"} placeholder="Último nome" />
                            </InputRoot>
                            <div />
                          </div>
                        </div>

                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="email">Email Address</label>
                          <InputRoot>
                            <InputIcon>
                              <Mail className="size-5 text-zinc-500" />
                            </InputIcon>
                            <InputControl type="email" id="email" defaultValue={"amiltonxavier1999@gmail.com"} />
                          </InputRoot>
                        </div>
                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="photo">Your photo
                            <span className="text-sm block mt-0.5 font-normal">
                              This is be disaplayed on your profile
                            </span>
                          </label>
                          <div className="">

                            <FileInput.Root className="flex items-start gap-5" >
                              <FileInput.ImagePreview />
                              <FileInput.Trigger />
                              <FileInput.Control />
                            </FileInput.Root>



                          </div>
                        </div>
                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="role">Role</label>
                          <InputRoot>
                            <InputControl type="role" id="role" defaultValue={"CTO"} />
                          </InputRoot>
                        </div>
                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="country">Country

                          </label>
                          <div>
                           {/* <Select.Root>
                              <Select.Trigger >
                                <Select.SelectItem disabled selected>Escolhe um País</Select.SelectItem>
                                {
                                  Object.keys(CONSTANTS.CONTINENT).map((continets) => (
                                    <Select.SelectGroup key={continets} label={continets}>
                                      {
                                        CONSTANTS.CONTINENT[continets].map((country: string) => (
                                          <Select.SelectItem key={country}>{country}</Select.SelectItem>
                                        ))
                                      }

                                    </Select.SelectGroup>
                                  ))
                                }
                              </Select.Trigger>
                              </Select.Root>*/}
                          </div>
                        </div>
                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="timezone">TimeZone

                          </label>
                          <div>
                            <Select.Root>
                              <Select.Trigger >
                                <Select.SelectItem disabled selected>Escolhe um timezone</Select.SelectItem>
                                {
                                  CONSTANTS.TIMEZONES.map((timezone) => (
                                    <Select.SelectItem key={timezone}>{timezone}</Select.SelectItem>
                                  ))
                                }
                              </Select.Trigger>
                            </Select.Root>
                          </div>
                        </div>

                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="bio">Bio
                            <span className="text-sm block mt-0.5 font-normal">
                              Write an short introduction
                            </span>
                          </label>
                          <div></div>
                        </div>
                        <div className="grid grid-cols-form gap-3 pt-5">
                          <label className=" text-zinc-700 text-sm font-medium" htmlFor="portfolioproject">Portifolio Project
                            <span className="text-sm block mt-0.5 font-normal">
                              Share a few snippers of your work
                            </span>
                          </label>
                          <FileInput.Root  >

                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                          </FileInput.Root>
                        </div>
                        <div className="flex items-center justify-end gap-2 pt-5">
                          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
                          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 hover:bg-violet-700 text-white">save</button>

                        </div>
                      </form>
                    </div>
                  )
                }
                {
                  activaTab == 2 && (
                    <p>Tab: {activaTab}</p>
                  )
                }
                {
                  activaTab === 3 && (
                    <p>Tab: {activaTab}</p>
                  )
                }
                {
                  activaTab === 4 && (
                    <p>Tab: {activaTab}</p>
                  )
                }
                {
                  activaTab === 5 && (
                    <p>Tab: {activaTab}</p>
                  )
                }

              </section>

            </div>

          </main>
        </div>

    </>

  )
}

export default App
