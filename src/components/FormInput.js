import React from "react";
import Button from "./Button";
import './style/FormInput.css'

class FormInput extends React.Component{
    state = {
        text: " "
    }
    change = e => {
        this.setState({text: e.target.value})
    }

    submit = e => {
        e.preventDefault()
        if(this.state.text !== " "){
            this.props.add(this.state.text)
        }
        this.setState({
            text: " "
        })
    }
    render(){
        return(
            <form className="formInput" onSubmit={this.submit}>
                <input 
                    type="text" 
                    className="input" 
                    value={this.state.text}
                    placeholder="Tambah Catatan"
                    onChange={this.change}
                />
                <Button className="input-btn" text="Tambah" variant="tambah" action={this.submit}/>
            </form>
        )
    }
}

export default FormInput;
