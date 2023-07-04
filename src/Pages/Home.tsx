import { useSelector } from "react-redux"
export const Home = ()=>{
    const username = useSelector((state: any) => state.user.value.username);
    return <h1>Hello {username}! This is Home</h1>
} 