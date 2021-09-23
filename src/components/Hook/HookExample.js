import React, { useState,useEffect} from 'react';

function HookExample() {
    // Khai báo 1 biến trạng thái mới đặt tên là "count"
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState("chuối");
    useEffect(() => {
        // Cập nhập document title sử dụng browser API
        document.title = `You clicked ${count} times`;
      });
    function handleOrangeClick() {
        // Similar to this.setState({ fruit: 'orange' })
        setFruit('orange');
      }
    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setCount(count + 1)}>
                Bấm vào tôi
            </button>
            <button onClick={() => handleOrangeClick()}>
                Biến
            </button>
            <p>Quả này là quả {fruit} </p>
        </div>
    );
}
export default HookExample