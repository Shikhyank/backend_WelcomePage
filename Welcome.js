let http=require('http');
let server=http.createServer((req,res)=>{
    let url=req.url;

    if(url=='/home'){
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to my home page</h1>
        </body>
        </html>`)
    }

    if(url=='/about'){
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to my about page</h1>
        </body>
        </html>`)
    }

    if(url=='/node'){
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to my node page</h1>
        </body>
        </html>`)
    }
})
server.listen(3000)