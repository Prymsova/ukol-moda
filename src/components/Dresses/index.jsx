import React from "react";
import "./style.css";
import Product from "../Product";


const Dresses = ({title}) => {
    return (
        <section class="dresses">
			<h2>{title}</h2>
			<div class="products">

                <Product image="red-dress.jpg" name="Červené šaty" description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií." price="2 290 Kč"/>

				<Product image="flower-dress.jpg" name="Květované šaty" description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat." price="3 100 Kč"/>

				<Product image="yellow-dress.jpg" name="Žluté šaty" description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě." price="4 250 Kč"/>
				
			</div>
		</section>
        )
    };

export default Dresses;