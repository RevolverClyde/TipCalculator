import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const express = require("express");

const app = express();

ReactDOM.render(

<div>

<Heading />

<div>
<a id="section_label">Bill</a>
<form>
    <label>Bill</label>
    <input type="text" placeholder="0"></input>
</form>
</div>

<div>
    <label>Select Tip %</label>
    <button>5%</button>
    <button>10%</button>
    <button>15%</button>
    <button>25%</button>
    <button>50%</button>
    <button>Custom</button>
</div>

<div>
    <label>Number of People</label>
    <input placeholder="0"></input>
</div>

<div>

<label>Tip Amount</label>
<label>/ Person</label>
<output>$</output>


<label>Total</label>
<label>/ Person</label>
<output>$</output>

<button>Reset</button>

</div>


</div>,


document.getElementById("root")

)


app.listen(3000, function () {
    console.log("Server Started On Port 3000")
})