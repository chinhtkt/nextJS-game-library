import { headers } from 'next/headers'
import NavBar from "@/components/navbar/page";

const LayoutWrapper = async ({children}) => {
    const result = await headers()
    const pathname = result.get('x-current-path')
    const hideNavbar = pathname === '/login'
    return (
        <>
            {!hideNavbar && <NavBar/>}
            <main className="h-full bg-cover relative overflow-hidden">{children}</main>
        </>
    )
}

export default LayoutWrapper
