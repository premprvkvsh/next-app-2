export function GET(){

    return Response.json({
        email: "prem@gmail.com",
        name: "prem"
    })
}

//writing same thing in express
// app.get("/api/user", (req, res) => {
//     res.json({
//         email:"prem@gmail.com",
//         name: "prem"
//     })
// })