var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass ({
    render: function() {
        return (
            <h1>
            Hello, asdfsdf!
            </h1>
        )
    }
})

var Greetings = React.createClass({
	render: function(){
		return(
			<h2>
				this is test
			</h2>

		)
	}
})



ReactDOM.render(<Hello />, document.getElementById('container'))


ReactDOM.render(<Greetings />, document.getElementById('dell'))

