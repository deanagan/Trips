import React, {Component} from 'react';
import axios from 'axios';
export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeCompletedDate = this.onChangeCompletedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeStartDate(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }
    onChangeCompletedDate(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;
        let tripCreated = {
            Id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        axios.post("api/Trips/Create", tripCreated).then(result => {
            history.push('/trips');
        })
    }
    render() {
        return (
            <div className="trip_form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip Name: </label>
                        <input type="text" className="form-control" value={this.state.name}
                        onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Trip Description: </label>
                        <input type="text" className="form-control" value={this.state.description}
                        onChange={this.onChangeDescription}/>
                    </div>
                    
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Started: </label>
                                <input type="date" className="form-control" value={this.state.dateStarted}
                                onChange={this.onChangeStartDate}/>
                            </div>
                        </div>                        
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Completed: </label>
                                <input type="date" className="form-control" value={this.state.dateCompleted}
                                onChange={this.onChangeCompletedDate}/>
                            </div>
                        </div>                        
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Add Trip" className="btn btn-primary"/>
                    </div>
                </form>

            </div>
        )
    }
}