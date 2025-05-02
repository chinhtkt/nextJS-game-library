import Image from "next/image";
import {handleLogout} from "@/actions/auth-action";

export default function Home() {
  return (
    <div>
        <h1>test</h1>
        <button className='cursor-pointer' onClick={handleLogout}>
            Log out
        </button>
    </div>
  );
}
