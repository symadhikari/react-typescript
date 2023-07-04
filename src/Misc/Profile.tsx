interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    gender: Gender;
}

export enum Gender {
    M = "Male",
    F = "Female",
    O = "Others"
}

export const Profile = (props: Props) =>{
    return (
        <div>
            <h1>Profile</h1>
            <h3>Name: {props.name}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Status: {props.isMarried ? "Married" : "Unmarried"}</h3>
            <h2>Friends</h2>
            {props.friends.map((friend: string)=>(
                <h3>{friend}</h3>
            ))}
        </div>
    );
}