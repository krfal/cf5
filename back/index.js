const express = require('express')
const cors = require('cors')
const { Pool, Client } = require('pg')

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/bebidas', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
    saveBebidas('hola','hola','hola')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function saveBebidas(tipo, nombre, precio){
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'cf5',
        password: '123789oaf',
       // port: 3211,
       port: 5432,
      });
      await client.connect();
      const res = await client.query("Select * from bebidas");
      //console.log(res.rows[0].message);
      console.log(res.rows[0]);
      await client.end();
}