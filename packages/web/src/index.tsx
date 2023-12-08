import  {StrictMode,useEffect,useState} from "react";
import {createRoot} from "react-dom/client";

import {Workspace} from "types";

const App = () => {
    const [data, setData] = useState<Workspace[]>([]);
    useEffect(()=>{
        fetch('http://localhost:5000/workspaces')
        .then(res => res.json())
        .then(({data})=> setData(data))
    },[])

    return (
        <StrictMode>
            <h1>Building a fullstack Typescript project with TurboRepo</h1>
            <h2>Workspace</h2>
            {
                JSON.stringify(data, null, 2)
            }
        </StrictMode>
    )
}

const app = document.getElementById("app")
if(app) {
    createRoot(app).render(<App />)
}