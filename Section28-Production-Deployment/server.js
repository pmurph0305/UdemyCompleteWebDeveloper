const app = require('http')
    .createServer((req,res) => res.send("Created server response"));

const PORT = process.env.PORT || 3002;
const DATABASE_URL = process.env.DATABASE_URL
app.listen(PORT, () => {
    console.log(`Listening on port ${DATABASE_URL}`)
})

console.log(PORT);