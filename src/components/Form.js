import { Component } from "react";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { lang: 'vi' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        if (event.target.type === 'checkbox' && event.target.checked === false) {
            value = '';
        }
        this.setState({
            [name]: value
        });

    }
    handleSubmit(event) {
        event.preventDefault();
        // console.log(document.getElementById('username').getAttribute('value'));
        console.log(this.state);

    }
    render() {
        return (
            <div className="card border-warning w-75 m-auto">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label className='m-0'>Username: </label>
                        <input type="text"
                            className="form-control" name="username" id="username" data-id='1' aria-describedby="helpId" placeholder="username" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" name="password" id="" placeholder="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="select"></label>
                        <select className="form-control" name="hobby" id="select" onChange={(event) => { this.handleChange(event) }}>
                            <option value=''>Chọn</option>
                            <option value='2'>Bơi</option>
                            <option value='1'>Bóng đá</option>
                        </select>
                    </div>
                    {/* Check Box */}
                    <div className="form-check">
                        <input className="form-check-input" id='check' type="checkbox" name="checkbox" value="option1" onChange={(event) => { this.handleChange(event) }} />
                        <label className="form-check-label" htmlFor='check'>Trạng thái</label>
                    </div>
                    {/* Radio Box nếu this.state.lang==='vi' thì check lên ô vi */}
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="lang" value="vi" checked={this.state.lang === 'vi'} onChange={(event) => { this.handleChange(event) }} />
                            Việt Nam
                        </label>
                    </div>
                    {/* Radio Box nếu this.state.lang==='en' thì check lên ô  en*/}
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="lang" value="en" checked={this.state.lang === 'en'} onChange={(event) => { this.handleChange(event) }} />
                            Anh Quốc
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        )
    }
}