import { useEffect, useState } from "react"
import axios from "axios"

export default function useGetUser (initial) {
    const [user, setUser] = useState(initial)

    useEffect(() => {
        const getUser = async() => {
            const res = await axios({
                method : "get",
                url : "http://localhost:5000/api/user/getUser",
                headers : {
                    authToken : localStorage.getItem("token")
                }
            })
            if (res.data.success === true) {
                setUser(res.data.User)
                console.log(res.data.User)
            }
            else {
                alert("Could not get User")
            }
        }

        getUser()
    }, [])

    return [user, setUser]
}