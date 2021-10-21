app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  })