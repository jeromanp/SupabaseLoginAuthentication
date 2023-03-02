import { useEffect, useState } from 'react'
import {supabase} from "./../src/pages/api/supabaseCient"


export default function UserArea() {

  const [user, setUser] = useState(" ")

  useEffect(() => {
    setUser(supabase.auth.getUser());
  }, [])

    const handleLogout = async () => { 
      try {
        const { error } = await supabase.auth.signOut()

        if(error) throw error

      } catch (e) { 
        alert(e.message)
      }

    }
  
  
    return (
      <div>
        <h1>User area</h1>
        <p>{JSON.stringify(user.email)}</p>
        <button onClick={handleLogout}>LogOut</button>
      </div>)

    
}



