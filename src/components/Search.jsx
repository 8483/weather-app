var React = require("react");
var List = require("./List.jsx");

var Search = React.createClass({
    getInitialState: function(){
        return {value: ""};
    },
    onChange: function(e){
        this.setState({value: e.target.value});
        this.refs.componentList.search();
    },
    render: function(){
        return (
            <div className="row">
                <input
                    className="form-control"
                    onChange={this.onChange}
                    placeholder={"Enter a city..."} />

                <List
                    city={this.state.value}
                    ref="componentList"/>
            </div>
        );
    }
});

module.exports = Search;
