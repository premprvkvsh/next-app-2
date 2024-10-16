import axios from "axios";

async function getUserData(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
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