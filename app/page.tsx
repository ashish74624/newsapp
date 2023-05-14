import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar btnmsg="Get Started"/>
      <div className="relative z-20">
        <Poster/>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <FrontPage/>
      </div>
    </main>
  )
}
