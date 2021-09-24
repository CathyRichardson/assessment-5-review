require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const postCtrl = require('./controllers/posts');
const { register, login, getUser, logout } = require('./controllers/user');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connection established!');
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(express.json());

//Auth Endpoints
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.get('/api/auth/me', getUser);
app.post('/api/auth/logout', logout);

// Post Endpoints
app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));