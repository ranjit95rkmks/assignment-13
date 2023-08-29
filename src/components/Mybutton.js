'use client'
import React from 'react';

const Mybutton = () => {

    const cookieHandeler = async ()=> {

       // async () => {
           await fetch('http://localhost:3000/api/set-cookies', {
        
            header: 'Authorization'
          });

      // }

       
       
       
   }

    return (
        <div>
             <button onClick={() => cookieHandeler()} className="btn btn-outline btn-success">Set cookie</button>
        </div>
    );
};

export default Mybutton;