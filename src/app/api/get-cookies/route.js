import { NextResponse } from "next/server";

export async function GET(req, res) {

    const getMyCookie = req.cookies.get('token')
    console.log("++++++++++++++++++++ get cookies ++++++++++++++++++++")
    return NextResponse.json({
        cooki: getMyCookie
    }
    )
}
