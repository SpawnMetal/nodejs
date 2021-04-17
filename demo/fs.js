// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), err => { // Создаст папку, если она существует выдаст err
//     if(err) throw err

//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt') // По умолчанию перетирает файл

// fs.writeFile(filePath, 'Hello NodeJS!', err => {
//     if(err) throw err

//     console.log('Файл создан')
// })

// fs.appendFile(filePath, '\nHello Again!', err => { // Добавит контент
//     if(err) throw err

//     console.log('Файл создан')
// })

// fs.readFile(filePath, (err, content) => { // Чтение файла
//     if(err) throw err

//     const data = Buffer.from(content)
//     console.log('Content:', data.toString())
// })

fs.readFile(filePath, 'utf-8', (err, content) => { //Второй способ чтения файла
    if(err) throw err

    console.log(content)
})
