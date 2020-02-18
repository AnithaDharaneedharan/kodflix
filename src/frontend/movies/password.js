import React from "react";
import { useState } from "react";

export default function PasswordMatch() {
  const [statePwd, setStatePwd] = useState('');
  const [stateCP, setStateCP] = useState('');

  return (
    <div>
      <input
        type="password"
        className="pwd"
        value={statePwd}
        onChange={e => setStatePwd(e.target.value)}
      />
      
      <input
        type="password"
        className="confirmPwd"
        value={stateCP}
        onChange={e => setStateCP(e.target.value)}
      />
   

      <label>
        {" "}
        {statePwd === stateCP ? `Passwords match` : `Pass dont match`}{" "}
      </label>
    </div>
  );
}
