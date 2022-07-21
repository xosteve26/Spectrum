import { Fragment , useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]



const Header = () => {
    const navigate = useNavigate(); 
    const [search, setSearch] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    }

  return (

      <>

          <div className="relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                      <svg
                          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                          fill="currentColor"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                      >
                          <polygon points="50,0 100,0 50,100 0,100" />
                      </svg>

                      <Popover>
                          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                             
                          </div>

                          <Transition
                              as={Fragment}
                              enter="duration-150 ease-out"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="duration-100 ease-in"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Popover.Panel
                                  focus
                                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                              >
                                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                      <div className="px-5 pt-4 flex items-center justify-between">
                                          <div>
                                              <img
                                                  className="h-8 w-auto"
                                                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                  alt=""
                                              />
                                          </div>
                                          <div className="-mr-2">
                                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                  <span className="sr-only">Close main menu</span>
                                                  <XIcon className="h-6 w-6" aria-hidden="true" />
                                              </Popover.Button>
                                          </div>
                                      </div>
                                      <div className="px-2 pt-2 pb-3 space-y-1">
                                          {navigation.map((item) => (
                                              <a
                                                  key={item.name}
                                                  href={item.href}
                                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                              >
                                                  {item.name}
                                              </a>
                                          ))}
                                      </div>
                                      <a
                                          href="#"
                                          className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                      >
                                          Log in
                                      </a>
                                  </div>
                              </Popover.Panel>
                          </Transition>
                      </Popover>

                      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                          <div className="sm:text-center lg:text-left">
                              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                  <span className="block xl:inline">Can't think of the name</span>{' '}
                                  <span className="block text-indigo-600 xl:inline">just yet ?</span>
                              </h1>
                              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                  fugiat veniam occaecat fugiat aliqua.
                              </p>
                              <div className="mt-5 ">
                                  <div>
                                      <form onSubmit={submitHandler}>
                                          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                          <div class="relative">
                                              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                              </div>
                                              <input value={search} onChange={e => setSearch(e.target.value)} type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a song lyric . . . " required />
                                              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800">Search</button>
                                          </div>
                                      </form>
                                  </div>

                              </div>
                          </div>
                      </main>
                  </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img
                      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                      src="https://images.unsplash.com/photo-1530288782965-fbad40327074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                  />
              </div>
          </div>
          {/* Section 1 */}
          {/* <section className="h-auto bg-white">
              <div className="px-10 py-24 mx-auto max-w-7xl">
                  <div className="w-full mx-auto text-left md:text-center">
                      <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                          {" "}
                          The{" "}
                          <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                              Number One Source
                          </span>{" "}
                          for
                          <br className="lg:block hidden" /> all your design needs.{" "}
                      </h1>
                      <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
                          {" "}
                          Say hello to the number one source for all your design needs. Drag and
                          drop designs, edit designs, and modify the components to help tell
                          your story.{" "}
                      </p>
                  </div>
              </div>
          </section> */}
      </>
      

  )
                                      }
                                      

export default Header