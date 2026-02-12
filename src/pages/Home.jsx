import OurTeam from "../components/layouts/OurTeam"
import Testimonial from "../components/layouts/Testimonial"
import Discover from "../components/sections/Discover"
import OurCategories from "../components/sections/OurCategories"



const Home = () => {
    return (
        <>
        <OurCategories/>
        <Discover/>
        <OurTeam/>
        <Testimonial/>
        </>
    )
}

export default Home