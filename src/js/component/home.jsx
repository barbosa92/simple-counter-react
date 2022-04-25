import React from "react";

const Contador = (props) => {
	return (
		<div className="d-flex">
			<i class="fa-solid fa-clock" id="reloj"></i>

			<div className="millones">
				{Math.floor((props.segundos / 10000) % 10)}
			</div>
			<div className="millares">
				{Math.floor((props.segundos / 1000) % 10)}
			</div>
			<div className="centenas">
				{Math.floor((props.segundos / 100) % 10)}
			</div>
			<div className="decenas">
				{Math.floor((props.segundos / 10) % 10)}
			</div>
			<div className="unidades">{props.segundos % 10}</div>
		</div>
	);
};

export default Contador;
