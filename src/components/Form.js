import { Component } from "react";
export default class Form extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={username:''}
    // }
    handleChange(event) {
        const target = event.target.value;
        const name = event.target.name;
        console.log(name + ':' + target);
    }
    handleSubmit(event) {
        event.preventDefault();
        // alert(1);
        console.log(document.getElementById('username').getAttribute('class'))

    }
    render() {
        return (
            <div className="card border-warning w-75 m-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className='m-0'>Username: </label>
                        <input type="text"
                            className="form-control" name="username" id="username" data-id='1' aria-describedby="helpId" placeholder="username" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" name="password" id="" placeholder="password" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        )
    }
}