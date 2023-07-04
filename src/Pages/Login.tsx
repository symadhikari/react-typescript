import { useState } from "react"
import { login, logout } from "../store"
import { useDispatch} from "react-redux"

export const Login = ()=>{
    const [newName, setNewName] = useState<string>("");
    const dispatch = useDispatch();
    return <div>
        <h1>This is Login Page</h1>
        <input onChange={(e) => {
            setNewName(e.target.value);
        }}/>
        <button onClick={() => dispatch(login({username: newName}))}>LogIn</button>
        <button onClick={() => dispatch(logout())}>LogOut</button>
    </div>
} 