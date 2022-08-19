import { ReactNode } from "react";
import "../styles/Modal.css"

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const Modal = ({ children, visible, setVisible }: ModalProps) => {
    if(!visible) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal__inner">
                <button className="modal__close" onClick={() => setVisible(false)} />
                {children}
            </div>
        </div>
    )
}

export default Modal;