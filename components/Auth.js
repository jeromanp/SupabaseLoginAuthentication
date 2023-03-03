// import react from "react";
import { useState } from "react";
import { supabase } from "./../src/pages/api/supabaseCient";


export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);


  
  const hangleSignUp = async () => {
    try {
      //esto viene de la doc de supabase
      let { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      alert("Check your email to confirm Sign Up");

      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  };

  const hangleSignIn = async () => {
    try {
      let { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
      alert("User logged.");
      console.log("hey estoy loggueado");
      console.log(user)
      // console.log(session)
    } catch (e) {
      alert(e.message);
    }
  };

  const changeForm = () => {
    //setear el estado de isSingUp
    setIsSignUp((value) => !value);
  };

  return (
    <div>
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>

      <div className="field">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name=""
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <div className="field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

      {/* fase 1 */}
        {/* <button onClick={hangleSignUp}>Sign Up</button> */}

        {isSignUp && <button onClick={hangleSignUp}>Sign Up</button>}

        {!isSignUp && <button onClick={hangleSignIn}>Sign In</button>}

        <a href="#" onClick={changeForm}>
          {isSignUp
            ? "Do you already have an account? Sign In"
            : "You are new? Sign Up"}
        </a>
      </div>
    </div>
  );
}
