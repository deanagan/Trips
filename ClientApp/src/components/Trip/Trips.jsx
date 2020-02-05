import React, {Component} from 'react';

export class Trips extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: false
        }
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
                    <tr>
                        <td>Name</td>
                        <td>Cebu</td>
                        <td>Today</td>
                        <td>Tomorrow</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Cebu</td>
                        <td>Today</td>
                        <td>Tomorrow</td>
                        <td>-</td>
                    </tr>
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