import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'


export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/api/setCookies')) {

        const requstHeaders = new Headers(req.headers)
        const hasHeader = requstHeaders.get('Authorization123')

        if(hasHeader){

            console.log("condition")
            const response = NextResponse.json({

                message: 'welcome',
                version: '1.0',
                success: true
            });
           return response.headers.set('Authorization', `Bearer${requstHeaders.get('Authorization')}`)      
        }
    /********
     * 
     *
     if(req.cookies.has('token') ){

            console.log('meddleware')
            const dashboard = new URL('/dashboard', req.url);
            //dashboard.searchParams.set('from', req.nextUrl.pathname);
            return NextResponse.redirect(dashboard);
        }

     */
        
        

        return NextResponse.next();

    }

    
}