
import Image from "next/image"
import axios from "axios";
import { Signup } from "@/components/Signup";
async function getUserDetails(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
     <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center mb-4">
        <div className="border p-8 rounded">
          <div className="flex flex-col items-center mb-4">
           
            <div> 
              <Signup/>
            </div>


</div>
    </div></div></div>
  );
}
