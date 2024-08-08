import express,{Application,Request,Response} from 'express';
import "dotenv/config"
const app:Application = express();
const PORT = process.env.PORT || 7000

app.get("/",(req:Request,res:Response) => {
    const newLocal = "Hey it'swoorking";
    return res.send(newLocal)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));