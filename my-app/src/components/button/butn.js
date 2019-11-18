import {ThemeContext} from "./them-context.js";
import React, {Component} from "react";

function ThemButn(props) {
	return (
	  <ThemeContext.Consumer>
	    {theme => (
	      <button
	        {...props}
	        style={{backgroundColor: theme.background}}
	      />
	    )}
	  </ThemeContext.Consumer>
	);
}

export default ThemButn;
  