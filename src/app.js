
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productsRouter from '../rounter/product';
import categoryRouter from '../rounter/category';
import authRouter from '../rounter/auth';
import mongoose from 'mongoose';


const app = express();



app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());



app.use("/api", productsRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
mongoose.connect('mongodb://localhost:27017/web16309')
    .then(() => console.log("Kết nối thành công"))
    .catch((error) =>  console.log(error))



const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT)
})

