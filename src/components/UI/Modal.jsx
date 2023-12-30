import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"

export default function Modal({ children, open,onCLose, className = '' }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        
        if (open) {
            modal.showModal();
        }

        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onCLose} >
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}