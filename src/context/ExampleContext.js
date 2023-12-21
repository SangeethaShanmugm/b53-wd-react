import React, { useState, createContext, useContext } from 'react'
import { useGlobalContext } from './context'
import { Sample2 } from './Sample2'
//1. Creating   - createContext ✅
//2. Publisher  - provider - context.Provider ✅
//3. Subscriber - useContext  - useContext(context) ✅


export const ProfileNameContext = createContext() //method

function ExampleContext() {
  const [profileName, setProfileName] = useState("John")
  const [newName, setNewName] = useState("")


  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  const handleClick = () => {
    setProfileName(newName)
  }

  return (
    <ProfileNameContext.Provider value={profileName} >
      <div>ExampleContext
        {/* <h1>{profileName}</h1>
      <input type="text" value={profileName} onChange={handleInputChange} />
      <button onClick={handleClick}>Change Name</button> */}
        <Sample />
        <Sample1 />
        <Sample2 />
      </div>
    </ProfileNameContext.Provider>
  )
}


function Sample() {
  const name = useGlobalContext()

  return (
    <h1>Welcome {name}</h1>
  )
}

function Sample1() {

  // const name = useContext(ProfileNameContext)
  const name = useGlobalContext()
  return (
    <h1>Hey {name}</h1>
  )
}





export default ExampleContext