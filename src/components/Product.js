import { Component } from "react";
export default class Product extends Component {
    onClick(name){
       alert (name);
    }
    render() {
        return (      
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src={this.props.imgurl} alt="" style={{width:'100%'}}/>
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>

                            </p>
                            <p>
                                <a href="/#" className="btn btn-primary" onClick={()=>this.onClick(this.props.name)}>Mua</a>
                                <a href="/#" className="btn btn-default">Chi tiết</a>
                            </p>
                        </div>
                    </div>
                </div>   
        )
    }
}
