import axios from "axios";

async function getUserData(){

  // accesing their own backend
  const response = await axios.get("http://localhost:3000/api/user")
  
    return response.data;
  
}

//async componets
export default async function Home(){
  const userDetails = await getUserData();

  return (
    <div>
      hi there
      {userDetails.email}
      {userDetails.name}
    </div>
  );
}