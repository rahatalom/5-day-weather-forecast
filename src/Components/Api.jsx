import React, { useState, useEffect } from "react";

function Api(props) {
  return (
    <div>
      <div className="card">
        <h2>{props.day}</h2>
        <img src={props.pic} alt="" />
        <div className="card-desc">
          <h2>{props.temp} °C</h2>
          <h3>{props.main}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Api;
