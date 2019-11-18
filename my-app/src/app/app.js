import React, {Component} from "react";
import MyRouter from '../router/router.js';


// function Toolbar (props) {
// 	return(
// 		<ThemButn onClick={props.changeTheme}>
// 			Change Theme
// 		</ThemButn>
// 	);
// };

class App extends Component {
	//  constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		theme: themes.light,
	// 	};

	// 	this.toggleTheme = () => {
 //        this.setState (state => ({
 //          // const { light, dark } = themes
 //          theme: state.theme === themes.dark ? themes.light : themes.dark
 //        }));
 //      };
	// }


	render() {
		return(
			<MyRouter/>
		);
	}
}

export default  App;


			// <div>
			// 	<h1>hello</h1>
			// 	<ThemeContext.Provider value={this.state.theme}> 
			// 		<Toolbar changeTheme={this.toggleTheme}/>
			// 	</ThemeContext.Provider>
			// </div>