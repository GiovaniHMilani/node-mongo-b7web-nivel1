import app from './app'

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`Listen on PORT: ${port}`)
})
