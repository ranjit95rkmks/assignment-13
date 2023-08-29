'use server'
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

export async function GET(req, res){

  if(req.cookies.get('token') !== null && req.cookies.get('token') !== undefined){
   console.log(`+++++++++++++++++++ ${req.cookies.get('token')} +++++++++++++++++++++`)
      redirect('/dashboard');
  
  }else{
    console.log("++++++++++++++++++++not work++++++++++++++++++++")
    return NextResponse.json( 
      {status: true, message: "Request Completed"},
      {
        status: 201,
        headers: {
          'Set-Cookie': `token=XYZ-123-1532; Path=/`
        }
      }
     )
  }

  

      


}