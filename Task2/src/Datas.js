import React from 'react';
import Data from "./Data";
const Tours = ({users}) => {
  console.log(users);
  return(
    <section>
      <diV>
        <h1 className="heading">User Data</h1>
      </diV>
          {users.map(user=>{
              return (
                  <div className="userdata">
                   <div className="container">
                      <Data user={user}/>
                  </div>
                </div>
              )
          })}
    </section>
  )
};

export default Tours;
