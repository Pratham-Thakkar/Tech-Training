const expess = require('express')
const app = expess()

app.get('/',(re,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.listen(3000)
