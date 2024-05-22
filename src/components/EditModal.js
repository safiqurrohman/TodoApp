import React from "react";
import './style/EditModal.css'
import Button from "./Button";

class EditModal extends React.Component{
    render(){
        const {edit , closeModal} = this.props;
        if(edit){
            return(
                <div className="container-edit">
                    <div className="modal-box">
                        <h1>Edit Data</h1>
                        <div className="input-modal">
                            <input type="text"></input>
                        </div>
                        <div className="btn-group">
                            <Button text="Kembali" variant="warning-modal" action={closeModal} />
                            <Button text="Edit" variant="success-modal" />
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

export default EditModal;