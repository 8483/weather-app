var React = require("react");
var ListItem = require("./ListItem.jsx");
var HTTP = require("../services/httpservice");

var List = React.createClass({
    getInitialState: function(){
        return {list: []};
    },
    search: function(){
        HTTP.get("forecast?q=" + this.props.city)
        .then(function(data){
            this.setState({city: data.city.name, list: data.list});
        }.bind(this)); // binds it to the component, instead of the callback.
    },
    render: function(){
        var listItems = this.state.list.map(function(item){
            return <ListItem key={item.dt} date={item.dt} degrees={item.main.temp}
                weather={item.weather[0].main} icon={item.weather[0].icon}/>;
        });
        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h2>{this.state.city} <span style={{"color":"orange"}}>5</span> Day Weather</h2>
                    </div>
                </div>
                {listItems}
            </div>
        );
    }
});

module.exports = List;
