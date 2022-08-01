import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserProfileScreen = () => {

    const [userData, setUserData] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState( null)
    const [password, setPassword] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/'
            return
        }
        async function fetchData(){
            try {
                const token = sessionStorage.getItem('token')
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
                const response =await axios.get('http://localhost:8000/users/get-user', { headers })
                setUserData(response.data[0])
                setName(response.data[0].name)
                setEmail(response.data[0].email)

            }
            catch (err) {
                if(err.response.status == 401){
                    console.log("unauthorized, Cannot fetch user")
                }
            }
        }
        
        if(!userData){
            fetchData()
          
        }
        
        console.log("userDATA",userData, name, email, password, passwordConfirm)


    }, [userData, name, email, password, passwordConfirm, message])



    const submitHandler = async (e) => {
        e.preventDefault()
        if(!name && !email && !password && !passwordConfirm){
            setMessage("Please fill in necessary fields")
            return
        }
        else if (password === passwordConfirm){
            try {
                const token = sessionStorage.getItem('token')
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
                
                const response = await axios.put('http://localhost:8000/users/update-user', { name, email, password }, { headers })
                console.log("RESPONSE", response)
                if (response.status === 200) {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('userId')
                    window.location.href = '/'
                }
            }
            catch (err) {
                console.log(err.message)
            }
        }
        else{
            console.log("password mismatch")
            setMessage("password mismatch")
        }
        
    }
  return (
      <section className="text-gray-300 body-font overflow-hidden h-screen bg-gradient-to-b from-black to-gray-900">

          <div className="mt-24 md:mt-24 lg:mt-24 xl:mt-0 container px-8 py-16 mx-auto">

                  <p className="text-4xl font-extrabold text-gray-300 text-center sm:text-5xl sm:tracking-tight lg:text-6xl">Profile </p>
              <form>
                  <div className="relative z-0 mb-6 w-full group">
                      <input
                          type="text"
                          name="name"
                          id="name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required=""
                          onChange={(e) => setName(e.target.value)}
                      />
                      <label
                          htmlFor="name"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                          Name: {userData ? userData.name : "Loading..."}
                      </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                      <input
                          type="email"
                          name="floating_email"
                          id="floating_email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required=""
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <label
                          htmlFor="floating_email"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                          Email: {userData ? userData.email : "Loading..."}
                      </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                      <input
                          type="password"
                          name="floating_password"
                          id="floating_password"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                          htmlFor="floating_password"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                          Password
                      </label>
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                      <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                  </div>
                  
                  
                  <button
                      type="submit"
                      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                      onClick={submitHandler}
                  >
                      Save
                  </button>
                  {message && <div className="text-center text-red-500">{message}</div>}
              </form>
            </div>

              

    
     
                
                
                
        </section>
    
      

  )
}

export default UserProfileScreen