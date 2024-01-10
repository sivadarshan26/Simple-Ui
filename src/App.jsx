import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex justify-center p-5 relative top-10 bg-blue-200 ">

        <div class="flex-1/2 h-240 w-96 shadow-xl  bg-white rounded-l-lg flex flex-col  justify-center p-7  " >
        
        <label for="login" class="text-2xl font-bold text-gray-700 text-left">
            Login
        </label><br></br><br></br>

        <label for="email" class="text-sm font-medium  text-gray-700 text-left ">
            Email Id / Username
        </label>
        
        <input type="email" name="email" placeholder="Enter your Email Id / Username" class="font-thin text-sm mt-1 p-2 w-full rounded-lg border-2 border-sky-200"></input>
        
        <label for="password" class="mt-4 text-sm font-medium text-gray-700 text-left">
            Password
        </label>

        <input type="password"  name="password" placeholder="Enter your password"  class="font-thin text-sm mt-1 p-2 w-full border-2 rounded-lg border-sky-200"></input>
        
        <button id="forgot" class="mt-1 mr-2 text-blue-500 hover:text-blue-700 font-semibold text-right">
            Forgot Password?
        </button>

        <div class="flex justify-center  mt-3 relative">
        <button class=" flex-grow mr-1   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Sign Up
        </button>

        <button class="flex-grow ml-1  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Sign In
        </button>
        </div>

        </div>


        <div class="relative flex-1/2 h-240 w-96 bg-green-200 flex items-center justify-center"> 
          
          <img class="absolute opacity-90 object-cover rounded-lg h-144 w-90 blur-sm"src="./images/fg1.png"></img>
          <img class="object-cover rounded-r-lg h-144 w-90" src="./images/bg1.png"></img> 
          <h1 class=" absolute text-5xl font-bold top-40  text-white">HueHub</h1>
          <p class="absolute top-56 text-lg text-green-300">Make your dreams colorful with us.</p>
          <img class="absolute top-64 size-64"  src="./images/ui.png"></img>  
        </div>
      </div>
    </>
  )
}

export default App
