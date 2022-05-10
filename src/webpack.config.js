const path = require ('path');

module.exports ={
    entry : "./App.js",
    output:{
        path: path.resolve(__dirname),
        filename: "_bundle.js"
    }
}