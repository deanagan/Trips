import React, {Component} from 'react';
import axios from 'axios';

export class Update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeCompletedDate = this.onChangeCompletedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get("api/Trips/Read/"+id).then(trip => {
            const response = trip.data;

            this.setState({
                name:response.name,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0,10),
                dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0,10) : '-'
            })
        });
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

    onUpdateCancel() {
        const {history} = this.props;
        history.push('/trips')
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let tripToUpdate = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: new Date(this.state.dateStarted).toISOString(),
            dateCompleted: this.state.dateCompleted ? new Date(this.state.dateCompleted).toISOString() : null
        }

        axios.put("api/Trips/Update/"+id, tripToUpdate).then(result => {
            history.push('/trips');
        })
    }

    render() {
        return (
            <div className="trip_form" >
                <h3>Update trip</h3>
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
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>

                    </div>
                </form>

            </div>
        )
    }
}