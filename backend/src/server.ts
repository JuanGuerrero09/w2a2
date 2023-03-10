import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT
const MONGO_CONECTION = process.env.MONGO_CONNECTION
console.log(PORT)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mongoose.connect(MONGO_CONECTION!).then(() => {
    console.log('mongoose connected')
    app.listen(process.env.PORT, () =>
        console.log(`server listening in port ${PORT}`)
    )
})
.catch(console.error)