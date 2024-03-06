const express = require('express')
const app = express()

const td = [{
    id: 1,
    text: '할 일1',
    done: false
}];

app.get('/', function (req, res) {
    res.send('User information will be sent here');
})

app.get('/api/todo', ()=>{
    return td;
})

app.post('/api/todo', (req, res) => {
    const {text, done} = req.body;
})

app.listen(3000, ()=>{
    console.log('서버 실행')
})