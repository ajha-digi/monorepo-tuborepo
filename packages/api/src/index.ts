import cors from "cors";
import express from "express";

import {Workspace} from "types";

const app = express();
const PORT = 5000;

app.use(cors({origin:"http://localhost:3000"}))

app.get("/workspaces",(_, response) => {
    const workspaces: Workspace[] = [
        {name: "api", version:"1.0.0"},
        {name: "types", version:"1.0.0"},
        {name: "web", version:"1.0.0"}
    ]
    response.json({data:workspaces})
})

app.listen(PORT, ()=>console.log(`Listening on http://localhost:${PORT}`))