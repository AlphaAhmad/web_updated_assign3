import "./css/input.css"

function InputField({ Title, type, Placeholder   }) {
    return (
        <div className="input-field">
            <label className="label">{Title}</label>
            <input className="input" type={type} placeholder={Placeholder} required/>
        </div>
    )
}

export default InputField;



