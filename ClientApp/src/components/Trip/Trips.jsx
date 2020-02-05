import React, {Component} from 'react';
import axios from 'axios';

export class Trips extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: true
        }
    }
    
    populateData() {
        axios.get("api/Trips/ReadAll").then(result => {
            const response = result.data;
            this.setState({trips: response, loading: false});
        });
    }

    componentDidMount() {
        this.populateData();
    }

    renderAllTripsTable(trips) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                            <tr key={trip.id}>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                                <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString() : '-'}</td>
                                <td>-</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        )
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading trips..</em>
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )
        return (
            <div>
                <h1>All trips</h1>
                <p>This is where I've been!</p>
                {content}
            </div>
        );
    }
}