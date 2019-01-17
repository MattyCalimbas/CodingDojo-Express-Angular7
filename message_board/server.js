var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/msg_db');

app.use(express.static(__dirname + '/static'));
app.use(session({
secret:'activeSession',
resave:false,
saveUninitialized:true,
cookie: {maxAge:60000}
}))

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    comment:  {type: String, required: true, minlength: 1}
}, {timestamps: true});

var MessageSchema = new mongoose.Schema({
    name:  {type: String, required: true, minlength: 1},
    message:  {type: String, required: true, minlength: 1},
    comments: [CommentSchema]
}, {timestamps: true})
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");


app.get('/', function (request, response) {
    arr = Message.find({}, function (err, message) {
        if (err) {
            console.log(err)
        }
        response.render('index', {msg:message});
    })
})

app.post("/message", function (request, response) {
    console.log("POST DATA", request.body);
    var message = new Message({
        name: request.body.name,
        message: request.body.message
    });
    message.save(function (err) {
        if (err) {
            console.log(err);
            response.redirect("/");
        } else {
            console.log("The new message was inserted into the DB.");
            response.redirect("/");
        }
    });
})

app.post("/comment/:id", function (request, response) {
    Message.findOne({_id: request.params.id}, function(err, message){
        var comment = new Comment({
            name: request.body.name,
            comment: request.body.comment,
            message: message._id
        });
        comment.save(function (errorsComm) {
            message.comments.push(comment);
            message.save(function(err){
                if (errorsComm) {
                    console.log("There was an error inserting the new comment into the DB.");
                    response.redirect("/");
                } else {
                    response.redirect("/");
                }
            });
        });
    });
});


app.listen(8000, function() {
console.log('listening on port 8000');
})