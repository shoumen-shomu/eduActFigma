import Discover from "../components/sections/Discover"
import OurCategories from "../components/sections/OurCategories"
import OurService from "../components/sections/OurService"
import ServiceCounter from "../components/sections/ServiceCounter"




const Home = () => {
    return (
        <>
        <OurCategories/>
        <Discover/>
        <OurService/>
        <ServiceCounter/>
        </>
    )
}

export default Home