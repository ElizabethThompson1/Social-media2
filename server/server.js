import Express  from "express";
import userRoutes from "./routes/users.js";

const app = Express();


app.use("/users", userRoutes);


app.listen(8800,() => {
    console.log("Server Running on Port 8800")
})