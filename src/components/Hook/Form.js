import React, { useRef } from "react";
export default function Form() {
    function ElementForm() {
        const name = useRef('name');
        const onButtonClick = () => {
            name.current.focus();
            alert(name.current.value)
        };
        return (
            <div className="form-group">
                <input ref={name} type="text" />
                <button onClick={onButtonClick}>Focus the input</button>
            </div>
        );
    }
    return (

        ElementForm()

    )

}