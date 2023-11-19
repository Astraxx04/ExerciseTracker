import React, {Component} from 'react';
import axios from "axios";

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post("https://exercisetracker-202q.onrender.com/users/add", user)
        .then(res => console.log(res))
        .catch((err) => {
            console.log(err);
        })

        this.setState({
            username: ""
        });
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3> 
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Username: </label> 
                        <input type='text' className="form-control" value={this.state.username} onChange={this.onChangeUsername} required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary mt-8" value="Create User" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;