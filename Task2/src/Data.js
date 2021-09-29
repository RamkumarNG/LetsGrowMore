import React, { useState } from 'react';

const Data = ({user}) => {
  return(
    <div>
      <section className="detailsContainer">
        <div className="image">
          <img src={user.avatar}></img>
        </div>
        <div className="id">
          <h4><span>Id:</span>{user.id}</h4>
        </div>
        <div className="Name">
          <h4><span>First Name:</span>{user.first_name}</h4> 
          <h4><span>Last Name:</span>{user.last_name}</h4>
        </div>
        <div className="email">
          <h5><span>Email:</span>{user.email}</h5>
        </div>
      </section>
      <div className="line">

      </div>
    </div>
  );
};

export default Data;
