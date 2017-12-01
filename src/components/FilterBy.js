import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSortSelection } from '../actions/actions'

class FilterBy extends Component {
    handleSortChange = (e) => {
        const { value: sortType} = e.target
        this.props.changeSorty(sortType)
    }

    render() {
        
        return (
            <div className="form-group filter-by">
                <label htmlFor='filterBy'>Sort By</label>
                <select value={this.props.ui.sortBy} onChange={this.handleSortChange} className="form-control" id='filterBy'>
                    <option value='timestamp'>Date</option>
                    <option value='voteScore'>Votes</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = ({ui}) => { //grabs from the store and makes available as props
  return { 
    ui: ui
  }
}

const mapDispatchToProps = (dispatch) => ({ //sends to the store
  changeSorty: (data) => dispatch(changeSortSelection(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterBy) 