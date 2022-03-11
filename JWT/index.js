import express from 'express';
import jwt from 'jsonwebtoken';

const SECRET_JWT_KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01'

const app = express()
const port = 4000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        res.status(404).send('Illegal username');
    }
    // Token erstellen
    const token = jwt.sign({ username }, SECRET_JWT_KEY); 

    const data = {
        token: token
    };

    res.json(data)
})

app.get('/check-token', (req, res) => {
    const tokenHeader = req.headers.authorization;
    // keinen auth herader?
    const token = tokenHeader && tokenHeader.split(' ')[1];
    // kein Token?
    if (!token) {
        res.status(402).send('Sorry, you need to be logged in!');
        return;
    }

    console.log('token:', token); 

    try {
        // Verify kann Fehler geben, deshallb try-catch
        const tokenInhalt = jwt.verify(token, SECRET_JWT_KEY);
        console.log(tokenInhalt); // { username: "someone" }
    
        res.json({
            username: tokenInhalt.username,
        });
    } catch(err) {
        res.status(402).send('Illegal token!')
    }
})

app.delete('/users/:id', (req, res) => {
    // header ausleasen
    // header und token lesen
    // token prüfen (verify) ->  // { username: "someone", role: "admin" }
    // Benutzer Rechte prüfen
    // const isAdmin = tokenContent.role === 'admin';
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})