import React,{useState} from 'react';


function Myapp(){
    const[count,MyCount]=useState(0);

function handle(){
    MyCount(count-1)
}
const handleInc=()=>{
    MyCount(count+1);
}
    return(
        <div>            
            <h1 style={{ color:"red", textAlign: "center",userSelect:"none"}}>CAR INSURANCE CO</h1>
            <h3 style={{ color:"gray", textAlign: "center",userSelect:"none" }}>The  Car Insurance Count is : <span style={{ color: "dodgerBlue"}}>{count}</span> </h3>
            <div style={{ textAlign: "center",userSelect:"none" }}>
                
                <button onClick={handle} style={{ height: "50px", width: "50px", fontSize: "40px",borderRadius:"10px",boxShadow:"5px 10px 0 0", }}>-</button>

                <button onClick={handleInc} style={{ height: "50px", width: "50px", fontSize: "40px",borderRadius:"10px",boxShadow:"5px 10px 0 0 black", marginLeft:"20px" }}>+</button>
            </div>
        </div>
    )
}
export default Myapp