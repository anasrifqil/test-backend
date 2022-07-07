const express = require('express')
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://hirosima2628:faturrohman09@cluster0.sldwg.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'db_personalweb';
const app = express()
const port = process.env.PORT || 5000

app.get('/', async(req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tb_web');
  const data = await collection.find({}).toArray();
res.json({data})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})