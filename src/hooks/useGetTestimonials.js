import axios from "axios";
import { useEffect, useState } from "react";


export default function useGetTestimonials(initial) {
    const [testimonials, setTestimonials] = useState(initial)

    useEffect(() => {
        const fetchTestimonials = async() => {
            const res = await axios({
                method : "get",
                url : "http://localhost:5000/api/testimonials"
            })
            if (res.data.success === true) {
                setTestimonials(res.data.Testimonials)
                console.log(res.data.Testimonials)
            }
            else {
                alert("Could not get Testimonials")
            }
        }

        fetchTestimonials()
    }, [])

    return [testimonials, setTestimonials]
}