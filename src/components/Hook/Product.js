import React from "react"
export default function Product(props) {
    function onClick(name){
        alert(name);
    }
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
                <img src={props.imgurl} alt="" style={{ width: '100%' }} />
                <div className="caption">
                    <h3>{props.name}</h3>
                    <p>
                    </p>
                    <p>
                        <a href="/#" className="btn btn-primary" onClick={() => onClick(props.name)}>Mua</a>
                        <a href="/#" className="btn btn-default">Chi tiết</a>
                    </p>
                </div>
            </div>
        </div>
        )
}