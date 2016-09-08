var React = require("react");
var moment = require("moment");

var ListItem = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-xs-2">{moment.unix(this.props.date).format("ddd")}</div>
                <div className="col-xs-2">{moment.unix(this.props.date).format("DD.MM")}</div>
                <div className="col-xs-2">{moment.unix(this.props.date).format("HH:mm")}</div>
                <div className="col-xs-2">{Math.floor(this.props.degrees - 273.15) + " C"}</div>
                <div className="col-xs-2">{this.props.weather}</div>
                <div className="col-xs-2">
                    <img style={{"height": "20px"}}
                    src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"}/>
                </div>
            </div>
        )
    }
});

module.exports = ListItem;
