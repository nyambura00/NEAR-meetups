import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useAppContext } from '../AppContext';
import { login, logout } from "../../utils/near";
import { Menu, Transition, Dialog } from '@headlessui/react';
import { } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import { NotificationError, NotificationSuccess } from '../notif-status';
import { v4 as uuid4 } from "uuid";
import { useForm } from "react-hook-form";


interface NavProps {

}


interface Event {
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
  created?: string;
  owner?: string;
}


export default function Nav({ }: NavProps) {
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { account, balance, contract } = useAppContext()
  const [event, setEvent] = useState<Event>({
    title: '',
    description: '',
    location: '',
    date: '',
    imageUrl: '',
  })
  let [isOpen, setIsOpen] = useState(false)
  let [loading, setLoading] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  const onSubmit = (data: { [x: string]: any; }) => {
    setLoading(true)
    setEvent({ ...event, title: data.title, description: data.description, location: data.location, date: String(Date.parse(data.date)), imageUrl: data.imageUrl })

    contract.addEvent({ event: { ...event, ...{title: data.title, description: data.description, location: data.location, date: String(Date.parse(data.date)), imageUrl: data.imageUrl }, id: uuid4() }}).then(() => {
      toast(<NotificationSuccess text="Your event has been successfully created." />);
      setLoading(false)
      if (router.pathname !== '/') {
        router.push('/')
      } else {
        router.reload()
      }
    }
    ).catch((err: any) => {
      setLoading(false)

      console.log(err)
      toast(<NotificationError text="Failed to create an event." />);
    })
  };



  useEffect(() => {


  }, [errors])
  
  return (
    <div className="flex justify-between">
      <Link href="/" passHref>
        <h2 className="bg-secondary px-6 py-2 rounded-md font-bold">NEAR-meetups</h2>
      </Link>
      {
        account?.accountId ?
          (<div className="flex items-center">

            <button className="bg-secondary px-3 text-sm md:text-base md:px-6  py-2 rounded-md font-bold" onClick={openModal}>Add Event</button>
            {/* <Transition appear show={isOpen} as={Fragment}> */}
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
              open={isOpen}
            >
              <div className="min-h-screen px-4 text-center">
                {/* <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                > */}
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
                {/* </Transition.Child> */}

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                {/* <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                > */}
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create an event
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-4">
                        What does your event entail?
                      </p>
                      <div className="mb-2">
                        <label htmlFor="prompt" className="text-sm font-semibold">Event title </label>
                        <input type="text" id="prompt" className="w-full my-2 border border-gray-500 rounded-md p-2" {...register("prompt", { required: true })} defaultValue={event.title} placeholder="NEAR workshop" />
                        {errors.prompt && <span className="text-sm text-red-400 font-light">This field is required</span>}
                      </div>

                      <div className="mb-2">
                        <label htmlFor="name1" className="text-sm font-semibold">Event Description </label>
                        <textarea id="name1" className="w-full my-2 border border-gray-500 rounded-md p-2"{...register("name1", { required: true })} defaultValue={event.description} placeholder="get fundamentally started with the core concepts" />
                        {errors.name1 && <span className="text-sm text-red-400 font-light">This field is required</span>}

                      </div>
                      <div className="mb-2">
                        <label htmlFor="imgurl1" className="text-sm font-semibold">Location URL </label>
                        <input type="text" id="imgurl1" className="w-full my-2 border border-gray-500 rounded-md p-2"{...register("imgurl1", { required: true })} defaultValue={event.location} placeholder="https://bit.ly/NEAR101" />
                        {errors.imgurl1 && <span className="text-sm text-red-400 font-light">This field is required</span>}

                      </div>
                      <div className="mb-2">
                        <label htmlFor="name2" className="text-sm font-semibold">Date String </label>
                        <input type="text" id="name2" className="w-full my-2 border border-gray-500 rounded-md p-2"{...register("name2", { required: true })} defaultValue={event.date} placeholder="dd-mm-yyyy" />
                        {errors.name2 && <span className="text-sm text-red-400 font-light">This field is required</span>}

                      </div>
                      <div className="mb-2">
                        <label htmlFor="imgurl2" className="text-sm font-semibold">Image URL </label>
                        <input type="text" id="imgurl2" className="w-full my-2 border border-gray-500 rounded-md p-2"{...register("imgurl2", { required: true })} defaultValue={event.imageUrl} placeholder="https://www.mynetworkimage.com" />
                        {errors.imgurl2 && <span className="text-sm text-red-400 font-light">This field is required</span>}

                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex w-full justify-center px-4 py-4 text-sm font-medium text-black bg-secondary bg-opacity-70 border border-transparent rounded-md hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      // onClick={handleCreatePoll}
                      >
                        {loading ? (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'transparent', display: 'block' }} width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                          <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#85a2b6" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                          </circle>
                        </svg>) : 'Create Event'}

                      </button>
                    </div>
                  </form>
                </div>
                {/* </Transition.Child> */}
              </div>
            </Dialog>
            {/* </Transition> */}

            <div className="ml-2 md:w-40 text-right  top-16">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    NEAR {balance}
                    <ChevronDownIcon
                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                > */}
                <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a href={`https://explorer.testnet.near.org/accounts/${account?.accountId}`} target="_blank" rel="noreferrer" >
                          <button
                            className={`${active ? 'bg-secondary text-white' : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >

                            {account?.accountId}
                          </button>
                        </a>

                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            router.push('/'); setTimeout(() => {
                              logout()
                            }, 1000);
                          }}
                          className={`${active ? 'bg-secondary text-white' : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >

                          Disconnect wallet
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                </Menu.Items>
                {/* </Transition> */}
              </Menu>
            </div>




          </div>)
          :
          (<button className="bg-secondary px-6 py-2 rounded-md font-bold" onClick={login}>connect wallet</button>)
      }

    </div>

  )
}