import React, { useRef } from "react";
export default function Form() {
    function ElementForm() {
        const input = useRef('input'); // Dom chứa ref thì useRef có thể tham chiếu đên tất cả thành phần trong nó
        const onButtonClick = () => {
            input.current.focus();
            console.log(input.current.type)
        };
        return (
            <div className="form-group">
                <input ref={input} name='txtusername' type="text" /> {/* Dom chứa ref */}
                <button onClick={onButtonClick}>Focus the input</button>
            </div>
        );
    }
    return (

        ElementForm()

    )

}