// export function GET(){

//     return Response.json({
//         email: "prem@gmail.com",
//         name: "prem"
//     })
// }

//writing same thing in express
// app.get("/api/user", (req, res) => {
//     res.json({
//         email:"prem@gmail.com",
//         name: "prem"
//     })
// })



import { NextRequest } from "next/server"

export async function Postpone(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    return Response.json({
        mesasge: "You are logged in!"
    })
}