import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const form = (
<form name="Form" id="Form">
    <label htmlFor="fname"/><input type="text" id="fname" name="First Name" required placeholder="Your first name.."/>
    <label htmlFor="lname"/><input type="text" id="lname" name="Last Name" required placeholder="Your last name.."/>

        <select id="country" name="country" title="Country">
            <option name="Jordan" value="Jordan">Jordan &#128151;</option>
            <option name="USA" value="USA">USA</option>
        </select>

    <label htmlFor="Skills"/><textarea id="Skills" name="Skills" maxLength="500" rows="10" required placeholder="Type your skills.."/>
    <input name="Submit" type="submit" value="Submit" />
</form>
);
ReactDOM.render(form, document.getElementById("form"));