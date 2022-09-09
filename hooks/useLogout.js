import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth"
import { useRouter } from "next/router"

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuth()
    const router = useRouter()

    // creating a logout function
    const logout = async () => {
        setError(null)

        try {
            await signOut(auth)

            // dispatching a logout function
            dispatch({ type: "LOGOUT" })
            router.push('/login')

            if(!isCancelled){
                setError(null)
            }
        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, logout }
    
}