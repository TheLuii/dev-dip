import {useEffect, useState} from "react";
import React from "react";
import DotLoader from "react-spinners/DotLoader";


export function Loader() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 8000)
    }, [])

    return (
        <div className="loader">
            <DotLoader  color="#6813d5"
                        loading={loading}
                        size={30}
            />

        </div>
    );
}

