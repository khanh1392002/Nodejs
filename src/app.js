console.log("123");

const http = require('http');
// const express = require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productsRouter from '../rounter/product';
import postRouter from '../rounter/post';
import userRouter from '../rounter/user';
import categoryRouter from '../rounter/category';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", productsRouter);
app.use("/api", postRouter);
app.use("/api", userRouter);
app.use("/api", categoryRouter);

// const server = http.createServer((req, res) => {
//     console.log("url", req.url);
//     if(req.url === "/"){
//         console.log("Home Page");
//         res.setHeader('Content-Type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }else if(req.url === "/api/products"){
//         console.log("Product API")
//         const products = [
//             {id: 1, name: "Products A"},
//             {id: 2, name: "Products B"}
//         ];
//         res.end(JSON.stringify(products));
//     }else{
//         console.log("Chịu");
//     }
// });
//midlerware


// app.use(check);
// app.use((req, res) => {
//     console.log("Open the door");
// })
mongoose.connect('mongodb://localhost:27017/web16309')
    .then(() => console.log("Kết nối thành công"))
    .catch((error) =>  console.log(error))



const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT)
})

/**
 * npm i -g json-server: Cài đặt modules vào hệ thống
 * npm i --save express: 
 *      - Bắt buộc phải có module này mới chạy được project
 *      - Khi sử dụng npm i mặc định được cài đặt luôn
 * npm i --save-dev nodemon
 */