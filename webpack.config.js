const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry : "./src/index.js",
 output :{
    path : path.join(__dirname, "/dist"),
    filename :  "bundle.js",
    publicPath : "/"
 } ,
 plugins : [
    new HtmlWebpackPlugin({
        template : "./src/index.html"
    })
 ],
 devServer : {
    historyApiFallback : true
 },
 module : {
    rules : [
        {
            test : /\.js|jsx$/, 
            exclude : /node_modules/,
            use : {
                loader : "babel-loader",
                options : {
                    presets : ["@babel/preset-env","@babel/preset-react"]
                }
            },
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.png|jpeg|jpg|svg$/,
            use: "file-loader",
          },
    ]
 }
 
}