import './App.css';
import IphonePar from './componetns/parallax/iphone_main'
import MacPar from './componetns/parallax/macbook_main'
import AirPodsPar from './componetns/parallax/macintosh'
import TextBox from "./componetns/parallax/iphoneText";
import {useEffect, useState} from "react";
import Navibar from "./componetns/navbar";
import Loader from "././componetns/loader"


function App() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 8000)
    }, [])

  return (
    <div className="App">
        {
        loading ?
            <Loader/>
        :

            <header>
            <Navibar/>
            <IphonePar/>
            <TextBox/>
            <MacPar/>
            <TextBox/>
            <AirPodsPar/>
            </header>

        }



    </div>
  );
}

export default App;
