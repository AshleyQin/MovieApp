import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component{
    state = {
        value: '',
        imagesOnly: false
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({value: event.target.value})
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        }, 500);
    }

    

    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
                    <input type="text" className="rmdb-searchbar-input" placeholder="search" onChange={this.doSearch} value={this.state.value}/>
                </div>
                <div className="rmdb-checkbox">
                <input type="checkbox" checked={this.props.imagesOnly} onChange={this.props.onChange}/>
                <label>Images Only</label>
                </div>
            </div>
        )
    }
}

export default SearchBar;