import React from "react";
import IphonePar from '../../componetns/parallax/iphone_main';
import MacPar from '../../componetns/parallax/macbook_main';
import AirPodsPar from '../../componetns/parallax/macintosh';
import TextBox from "../../componetns/parallax/iphoneText";
import {useEffect, useState} from "react";
import {Loader} from "../../componetns/loader";

export function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 100)
    }, [])

    return (
        <div className="Home">
            {
               loading ?
                   <Loader/>
               :
                   <header>
                <IphonePar/>
                <TextBox/>
                <MacPar/>
                <TextBox/>
                <AirPodsPar/>
                    </header>
            }


        </div>
    )
}

