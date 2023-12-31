import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "react-datepicker/dist/react-datepicker";

class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        };
    }

    componentDidMount() {
        axios.get("https://exercisetracker-202q.onrender.com/users/")
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post("https://exercisetracker-202q.onrender.com/exercises/add", exercise)
        .then(res => console.log(res))
        .catch((err) => {
            console.log(err);
        })

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3> 
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Username: </label> 
                        <select ref="userInput" className="form-control" value={this.state.username} onChange={this.onChangeUsername} required>
                        {
                            this.state.users.map (function (user) {
                                return <option key={user} value={user}> {user} </option>;
                            })
                        }
                        </select> 
                    </div>
                    <div className="form-group">
                        <label>Description: </label> 
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label> 
                        <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label> 
                        <div>
                            <DatePicker className='border-2' selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary mt-8" value="Create Exercise Log" />
                    </div>
                </form>
            </div>
        );
    }


    
}

export default CreateExercise;