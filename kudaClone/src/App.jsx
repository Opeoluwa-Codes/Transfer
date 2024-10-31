import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Static/Header';
import Footer from './Static/Footer';

const App =()=>{
    return(
        <div>

            <BrowserRouter>
                
                <Header/>

                
                
                <Footer/>

            </BrowserRouter>

        </div>
    );
};
export default App;