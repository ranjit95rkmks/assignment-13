import { cookies } from 'next/headers'
import React from 'react';
import Mybutton from './Mybutton';
import { redirect } from 'next/navigation'


const Home = () => {
    const cookiesList = cookies()
  const hasCookie = cookiesList.has('token')

    if (hasCookie) {
        redirect('/dashboard')
        // console.log('joy Bangla')
      }
    return (
        <div>
           <Mybutton />
           
        
        </div>
    );
};

export default Home;