import Image from "next/image"
import LargeAboutMe from "./LargeAboutMeOld"
import AboutMeGrid from "./AboutMeGrid"

export default function SecondPage() {
    return (
        <section className="w-full min-h-screen block ">
            <div className="w-4/5 h-1/2 mx-auto">
                <AboutMeGrid/>
            </div>
            
        
        </section>
    )
}

