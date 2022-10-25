import './App.css';
import {useEffect, useState} from "react";
import {Loader} from "././componetns/loader"
import {Nav} from "./componetns/nav"
import Navibar from "./componetns/navbar"



function App() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 3000)
    }, [])

  return (
    <div className="App">
        {
        loading ?
            <Loader/>
        :
            <header>
            <Navibar/>
            <Nav/>
            </header>

        }



    </div>
  );
}

export default App;
