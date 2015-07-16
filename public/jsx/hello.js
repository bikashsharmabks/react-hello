React.render(
    React.DOM.h1(null, 'Hello, world!'),
    document.getElementById('example')
);

var HelloWorld = React.createClass({	
	render: function() {
	return React.createElement("div", null, "Hello World");
  }
});

var InputTest = React.createClass({
	getInitialState: function(){
		return {
			username: 'bikash'
		}
	},
	handleChange: function(e){
		this.setState({
			username: e.target.value
		});
	},
	render: function() {
		return(
			<div>
				Hello {this.state.username} <br/>
				Change name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
			</div>
		)
	}
});

React.render(<HelloWorld />, document.getElementById('example1'));
React.render(<InputTest />, document.getElementById('InputTest'));