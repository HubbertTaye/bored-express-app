module.exports = function(app, db) {
  app.get('/', (req, res) => {
    //console.log(db)
    db.collection('activity').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('index.ejs', {activity: result})
    })
  })

  app.post('/listActivity', (req, res) => {
    db.collection('activity').insertOne({activity: req.body.activity}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  })

  app.delete('/delActivity', (req, res) => {
    db.collection('activity').findOneAndDelete({activity: req.body.activity}, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    })
  })
}
