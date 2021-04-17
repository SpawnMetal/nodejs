// (function(exports, require, module, __dirname, __filename) { //Каждый модуль обораычивается в функцию с параметрами, поэтому появляются доп функции
    // const chalk = require('chalk')
    // const text = require('./data')
    
    // console.log(chalk.blue(text))
    // console.log(__dirname) // Системная переменная отобразит текущий путь к папке
    // console.log(__filename) // Системная переменная отобразит текущий путь к модулю
// })

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>
{
    // if(req.url === '/') fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) =>
    // {
    //     if(err) throw err

    //     res.writeHead(200,
    //     {
    //         'Content-type': 'text/html'
    //     })
    
    //     res.end(data)
    //     // res.end('<h1>Hello NodeJS!!!</h1>')
    // })
    // else if(req.url === '/contact') fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) =>
    // {
    //     if(err) throw err

    //     res.writeHead(200,
    //     {
    //         'Content-type': 'text/html'
    //     })
    
    //     res.end(data)
    // })

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'teht/html'

    switch(ext)
    {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
            break
    }

    if(!ext) filePath += '.html'

    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if(err) fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
            if(err)
            {
                res.writeHead(500)
                res.end('Error')
            }
            else
            {
                res.writeHead(200, {
                    'Content-type': 'text/html'
                })
                res.end(data)
            }
        })
        else
        {
            res.writeHead(200, {
            'Content-type': contentType
            })

            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => { // http://localhost:3000
    console.log(`Server has been started on ${PORT}...`)
})