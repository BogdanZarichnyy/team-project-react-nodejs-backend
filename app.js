const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const contactsRouter = require('./routes/api/pets');
const usersRouter = require('./routes/api/users');
const newsRouter = require('./routes/api/news');
const oursFriendsRouter = require('./routes/api/oursFriends');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/pets', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/api/news', newsRouter);
app.use('/api/ours_friends', oursFriendsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
