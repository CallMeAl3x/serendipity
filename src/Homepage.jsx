import Landing from "./components/Landing";
import SecondPart from "./components/SecondPart";
import Nav from "./Nav";
import {Helmet} from "react-helmet";

const Homepage = () => {
  return (
    <main>
      <Helmet>
      <title>Homepage</title>
      </Helmet>
    <div className='bg-background bg-cover bg-center max-sm:bg-left'>
    <Nav></Nav>
      <Landing></Landing>
      <div className='secondback mt-24 pt-12'>
      <SecondPart></SecondPart>
    </div>
    </div>
  </main>
  )
}

export default Homepage