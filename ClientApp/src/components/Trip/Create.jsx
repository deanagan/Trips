import React, {Component} from 'react';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    render() {
        return (
            <div className="trip_form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Trip Description: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Trip Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Started: </label>
                                <input type="date" className="form-control"/>
                            </div>
                        </div>                        
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date Completed: </label>
                                <input type="date" className="form-control"/>
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