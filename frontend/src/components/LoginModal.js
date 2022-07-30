import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios'

const LoginModal = ({isOpenLogin, onCloseLogin,sw}) => {
    const [open, setOpen] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const cancelButtonRef = useRef(null)

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submitHandler");
        console.log(e)
        try {
            const response = await axios.post('http://localhost:8000/users/login', {
                email: email,
                password: password
            });
            console.log(response);
            if(response.status === 200) {
                sessionStorage.setItem('token', response.data.token);
                console.log("ADDED SESSION")
                sessionStorage.setItem('userId', response.data.userId);
                onCloseLogin();
                window.location.reload();
            }
        }
        catch (err) {
            console.log(err.message);
        }
        onCloseLogin()
    
    }

  return (
      <Transition.Root show={isOpenLogin} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onCloseLogin}>
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed z-10 inset-0 overflow-y-auto ">
                  <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                      <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                          <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                              <div className="bg-gradient-to-b from-black to-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                  <div className="bg-gradient-to-b from-black to-gray-900 relative bg-white rounded-lg  dark:bg-gray-700">
                                      <button
                                          type="button"
                                          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                          data-modal-toggle="authentication-modal"
                                          onClick={onCloseLogin}
                                         
                                      >
                                          <svg
                                              aria-hidden="true"
                                              className="w-5 h-5"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                              <path
                                                  fillRule="evenodd"
                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                              />
                                          </svg>
                                          <span className="sr-only">Close modal</span>
                                      </button>
                                      <div className="py-6 px-6 lg:px-8">
                                          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                              Sign in to our platform
                                          </h3>
                                          <form className="space-y-6" action="#">
                                              <div>
                                                  <label
                                                      htmlFor="email"
                                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                  >
                                                      Your email
                                                  </label>
                                                  <input
                                                      type="email"
                                                      name="email"
                                                      id="email"
                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                      placeholder="name@company.com"
                                                      required=""
                                                      onChange={(e) => setEmail(e.target.value)}
                                                  />
                                              </div>
                                              <div>
                                                  <label
                                                      htmlFor="password"
                                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                  >
                                                      Your password
                                                  </label>
                                                  <input
                                                      type="password"
                                                      name="password"
                                                      id="password"
                                                      placeholder="••••••••"
                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                      required=""
                                                      onChange={(e) => setPassword(e.target.value)}
                                                  />
                                              </div>
                                              <div className="flex justify-between">
                                                  <div className="flex items-start">
                                                      <div className="flex items-center h-5">
                                                          <input
                                                              id="remember"
                                                              type="checkbox"
                                                              defaultValue=""
                                                              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                              required=""
                                                          />
                                                      </div>
                                                      <label
                                                          htmlFor="remember"
                                                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                      >
                                                          Remember me
                                                      </label>
                                                  </div>
                                                  <a
                                                      href="#"
                                                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                                  >
                                                      Lost Password?
                                                  </a>
                                              </div>
                                              <button
                                                type="submit"
                                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                onClick={submitHandler}
                                              >
                                                  Login to your account
                                              </button>
                                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                  Not registered?{" "}
                                                  <a
                                                      href="#"
                                                      className="text-blue-700 hover:underline dark:text-blue-500"
                                                      onClick={sw}
                                                  >
                                                      Create account
                                                  </a>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                              
                          </Dialog.Panel>
                      </Transition.Child>
                  </div>
              </div>
          </Dialog>
      </Transition.Root>
  )
}

export default LoginModal