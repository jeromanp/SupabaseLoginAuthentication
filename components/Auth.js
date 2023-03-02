import react from "react";
import { useState } from "react";
import { supabase } from "./../src/pages/api/supabaseCient";

export default function Auth() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isSingup, setIsSingUp] = useState(true);

  const hangleSignup = async () => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      alert("Check your email");

      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  };

  const hangleSignIn = async () => {
    try {
      let { data, error } = await supabase.auth.signInwithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      alert("User logged.");
      console.log(user);
      console.log(session);
    } catch (e) {
      alert(e.message);
    }
  };

  const changeForm = () => {
    setIsSingUp((value) => !value);
  };

  return (
    <div>
      <h1>{isSingup ? "Sign Up" : "Sign In"}</h1>

      <div className="field">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <div className="field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {isSingup && <button onClick={hangleSignup}>Sign Up</button>}

        {!isSingup && <button onClick={hangleSignIn}>Sign In</button>}

        <a href="#" onClick={changeForm}>
          {isSingup
            ? "Do you already have an account? Sign In"
            : "You are new? Sign Up"}
        </a>
      </div>
    </div>
  );
}
