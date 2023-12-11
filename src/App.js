import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  //JS starts
  const name = "Praveen";
  const name1 = "Ganesh";
  const people = ["Praveen", "Ganesh", "Aravind", "Kaja"]//Array of strings
  //                   0,      1,          2  

  const userList = [
    {
      name: "Sathya",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Ganesh",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Kaja",
      pic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    }

  ]

  //JS ends
  //JSX starts

  return (
    <div className="App">
      <Counter />
      {/* {people.map((personName) => (
        <Welcome nm={personName} />
      ))} */}
      {/* {userList.map((user) => (
        <Profile name={user.name} pic={user.pic} />
      ))} */}


      {/* <Profile
        name="Sathya"
        pic="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      />

      <Profile
        name="Ganesh"
        pic="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      /> */}

      {/* <h1>Hello {name}</h1> */}


      {/* <Welcome name="Praveen" age="20" />
      <Welcome name="Ganesh" age="23" />
      <Welcome name="Aravind" age="24" /> */}
      {/* <Msg name="Praveen" age="20" /> */}
    </div>
  );
}


function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0)

  console.log("Like", like)
  return (
    <div>
      {/* onClick => camelCase */}
      <button onClick={() => {
        setLike(like + 1)
        console.log(like)
      }}>👍{like}</button>

    </div>
  )
}



//task
//create profile component
//display profile pic and name

function Profile({ name, pic }) {
  return (
    <div>
      <img style={{ width: "300px", height: "300px" }} src={pic} />
      <h1>{name}</h1>
    </div>
  );
}

function Welcome(props) {
  return (
    <h1>
      Hi {props.nm} {props.age}
    </h1>
  );
}
//props destruturing
function Msg({ name, age }) {
  return (
    <h1>
      Welcome {name} {age}
    </h1>
  );
}








export default App;
