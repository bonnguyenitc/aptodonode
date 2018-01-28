var Todos = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos", (req, res) => {
        // setup seed data
        var seedTodos = [
            {
                text: "Học node js",
                isDone: false
            },
            {
                text: "Học angularjs",
                isDone: false
            },
            {
                text: "VIết ứng dụng hoàn chỉnh",
                isDone: false
            }
        ];
       
        Todos.create(seedTodos, function(err, results){
            res.send(results);
        });
    });
}