
// const sampleFunctions = require('./functions');

// sampleFunctions.sayHello();
// sampleFunctions.add(5,9);

// console.log('Hello World');


// const http = require('http');
// const handler = (req,res) => {
//     console.log('wiadomość')
    
// }
// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, () => {


//     console.log(`Serwer działa na porcie ${port}`);
// })

// -------------------------------------------------------



// -----------------------------------------------------------
// stawianie serwera
const express = require("express");
// dodajemy stronę na serwer zerwnętrzny poprzez dodanie process.env.PORT || 3000 (3000 dowolna cyfra portu)
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');


// -------------------------------
// DZIAŁANIE HBS - dla widoczności serwera
app.set('view engine','hbs');


// foldery z których odczytujemy dane do frontu
app.use('/assets', express.static(path.join(__dirname, './assets')))
app.use('/js', express.static(path.join(__dirname, './js')))


// ZADANIE1
const functions = require('./functions');
functions.sayHello();
functions.add(2,3);
// ZADANIE1



// app.get("/",(req,res) =>{
//     res.render("index", {
//         pageTitle: 'zajęcia dot. NodeJS'
//     });
//     });


    
// -------------------------------



// ZADANIE1
// tworzymy najpierw const add w functions.js a następnie diva z id w index.hbs z {{result}}


app.get("/",(req,res) =>{
    res.render("index", {
        pageTitle: 'zajęcia dot. NodeJS',
        result: functions.add(10,15)
    });
    });

// ZADANIE1




// ----------------------------------------------------
// za pomocą get tworzymy endpointy. Strona kończy się na '/' - brak np '.html' na końcu adresu strony.
app.get("/",(req,res) =>{
res.send("Heelo Wooorld");
});
// za pomocą render renderujemy w folderze views (który tworzymy jako folder node 'w domyśle' nie zmieniamy go)

app.get("/about",(req,res) =>{
res.render("about");
});





app.listen(port, err => {
if (err) {
return console.log(`Błąd ${err}`);
}
console.log(`Strona działa na porcie ${port}`);
});




