import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Loading from './Loading';
import Datas from './Datas';
import styles from "./app.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://reqres.in/api/users?page=1'
function App() {

  const [clicked,setClicked] = useState(false);
  const [users,setUser]=useState([]);
  const [loading,setLoading]=useState(true);

  const fetchData = ()=>{
    try{
      fetch(url)
      .then((res)=>res.json())
      .then((json)=>{
        console.log(json.data);
        setUser(json.data);
      })
      setLoading(false);
    }
    catch(e)
    {
      setLoading(true);
    }
  };

    const getUsers = (e)=>{
      e.preventDefault();
      setClicked(true);
      console.log("clicked");
    }

  useEffect(()=>{
    fetchData();
  },[]);

  if(loading)
  {
    return(
      <Loading />
    )
  }
  if(clicked && !loading)
  {
    return(
      <section>
        <Navbar />
        <Datas users={users}/>
      </section>
    )
  }
  return(
    <main>
      <div className="nav">
          <div>
                <h1>Zippy</h1>
            </div>
            <div>
                <button className="btn" onClick={getUsers}>USERS</button>
            </div>
        </div>

    </main>
  )

}

export default App
