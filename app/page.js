import {verifyAuth} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Home() {
    const result = await verifyAuth();

    if(!result.user) {
        return redirect('/login')
    }
    else {
        return redirect('/home');
    }

}
