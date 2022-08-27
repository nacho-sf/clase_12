// Módulos externos -> En primer lugar
const express = require("express");
const emoji = require("emoji-whale");
const cowsay = require("cowsay2");
const owl = require("cowsay2/cows/owl")
const whale = require("cowsay2/cows/whale")

// Módulos propios -> Tras los externos
const calc = require("./utils/calculator.js") // Mi módulo creado en /utils (se puede omitir el .js)


console.log(calc.add(10, 100));


const app = express()
const port = 3000


// HOME
// http://localhost:3000
// http://127.0.0.1:3000
app.get('/', (req, res) => {
  console.log(emoji);
  console.log(cowsay.say("Hola!", { cow: owl }));
  res.send('Hola desde mi primer servidor! '+emoji)
})


app.get('/pokemon/:name?', (req, res) => {
    console.log(req.params);
    let msj = "";
    if (req.params.name) {
        msj = "Aquí te envio a: " + req.params.name;
    } else {
        msj = "Aquí te envío a todos los pokemon";
    }

  console.log(cowsay.say(msj, { cow: owl }));
  res.send(msj+" "+emoji);
})

app.get('/perritos', (req, res) => {
  let msj = "¿Cuánto son 2+2?: "+calc.add(2,2);
  console.log(cowsay.say(msj, { cow: owl }));
  res.send('Aquí te enviaría mis perritos y ... '+msj)
})

// req: Request (lo que se pide)
// res: Response (lo que se devuelve)



app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: whale }));
});