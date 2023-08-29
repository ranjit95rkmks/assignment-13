'use client'
import getData from '@/lib/getData';
import React, { useEffect, useState } from 'react';

const page = () => {

    console.log("KKKKK")
//     const [cookieData, setData] = useState(null);
    
//     useEffect((setData(async() => await getData())
//     ),[cookieData
// ])
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">cookieData</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;