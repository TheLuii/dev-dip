import React from "react";
import IphonePar from '../../componetns/parallax/iphone_main'
import MacPar from '../../componetns/parallax/macbook_main'
import AirPodsPar from '../../componetns/parallax/macintosh'
import TextBox from "../../componetns/parallax/iphoneText";

export function Home() {

    return (
        <>
            <IphonePar/>
            <TextBox/>
            <MacPar/>
            <TextBox/>
            <AirPodsPar/>
        </>
    )
}

