import React from "react";

class SortBySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.sortBy ? this.props.sortBy : 'starts'};

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value}, ()=>{
            this.props.selectSortBy(event.target.value);
        });

    }


    render() {
        return (
            <div className='sortBySelect'>
                <label>
                    Sort by:
                    <select value={this.state.value} onChange={this.handleChange}>

                        <option value="starts">Stars</option>
                        <option value="forks">Forks</option>
                    </select>
                </label>
            </div>
        );
    }
}
export default SortBySelect;