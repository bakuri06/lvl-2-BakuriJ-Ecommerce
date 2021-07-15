import React, {useState} from "react";
import "./modal.css";
import Button from '@material-ui/core/Button';


export default function Modal({ children }) {
    const [modal, setmodal] = useState(false);

    const toggleModal = () => {
        setmodal(!modal)
    }

    return (
        <div>
            <div className="main-btn-modal">
                <Button onClick={() => toggleModal()} variant="contained" color="secondary">Add product</Button>
                {modal && (
                    <div className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">
                            {children}
                            <button className='close-modal' onClick={() => { setmodal(!modal) }}>
                                <i className="fa fa-window-close"></i>
                            </button>

                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}