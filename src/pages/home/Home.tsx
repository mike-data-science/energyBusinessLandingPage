import Header from '../../components/Header';
import About from './About';
import Benefits from './Benefits';
import Blog from './Blog';
import Partnering from './Partnering';
import Solution from './Solution';
import Webinar from './Webinar';
import ContactUs from './ContactUs'
export function HomePage(){
    return(
     <>
     <title>Home</title>
     <Header/>
     <About/>
     <Solution/>
     <Benefits/>
     <Partnering/>
     <Blog/>
     <Webinar/>
     <ContactUs/>
     </>
    )
}
