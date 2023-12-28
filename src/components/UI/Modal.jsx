import { useEffect } from "react";
import { createPortal } from "react-dom"

export default function Modal({children,open}){
    useEffect(()=>{
        if(open){
            
        }
    },[open]);
    return createPortal(
    <dialog open={open}>{children}</dialog>,
    document.getElementById('modal')
    ); 
}