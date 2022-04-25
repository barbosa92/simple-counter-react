//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Contador from "./component/home.jsx";

//render your react application
let contador = 0;
setInterval(function () {
	console.log(contador);
	ReactDOM.render(
		<Contador segundos={contador} />,
		document.querySelector("#app")
	);
	contador += 1;
}, 1000);
