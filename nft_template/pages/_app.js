import "@/styles/globals.css";
// Internal imports
import {NavBar, Footer} from '../components/componentIndex';

 const App = ({ Component, pageProps }) => (
 <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer/>
    </div>);
    
export default App;
