import express from "express"
import dotenv from "dotenv"
import resendRoute from "./routes/resend.route.js"
import cors from "cors"
dotenv.config()


const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://react-portfolio-alpha-one-12.vercel.app",
    ],
    credentials: true
}

app.use(cors(corsOptions));

// routes
app.use("/api", resendRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})