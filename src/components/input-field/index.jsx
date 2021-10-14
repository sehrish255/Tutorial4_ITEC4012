import "./styles.css"
export const Input = ({name, label, type, required, register, errors, validationSchema}) => {
    return(
        <div className= "form-control-input">
            <label>
                {label}
                {required && "*"}
            </label>

            <input name={name} type={type} {...register(name, validationSchema)} />

            {
                (errors[name]?.type === "required") && <span className="error">This field is required!</span>
            }
        </div>
    )
}