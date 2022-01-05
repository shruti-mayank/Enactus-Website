require('dotenv').config();
const express = require('express');
const app = express();
const database = require('./db');
const path = require('path');//for connecting views
const Member = require('./models/member');
const Project = require('./models/project');

app.set('view engine', 'ejs');//for connecting views
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/newproject', (req, res) => {
    res.render()
})
app.post('/newproject', async (req, res) => {
    const project = new Project(req.body.project);
    await project.save();
    console.log(project);
    res.redirect();
})

app.get('/newmember', (req, res) => {
    res.render()
})
app.post('/newmember', async (req, res) => {
    const member = new Member(req.body.member);
    await member.save();
    console.log(member);
    res.redirect();
})


app.listen(process.env.PORT, () => {
    console.log("server started on port :" + process.env.PORT);
});