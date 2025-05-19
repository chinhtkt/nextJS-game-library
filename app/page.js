import {destroySession, verifyAuth} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Home() {
    await destroySession();
    redirect('/login');
}
