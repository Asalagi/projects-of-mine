

function Register() {
    // something here

    return (
        <div>
            <h1>Please fill out the form</h1>
            <div>
                <label>Horse's Name:</label>
                <input type="text" name="name" required /><br/>
                <label>Horse's Breed:</label>
                <select name="breed" required>
                <option value=" ">--Choose a breed</option>
                <option value="Paint Horse">Paint Horse</option>
                <option value="Quarter Horse">Quarter Horse</option>
                <option value="Arabian">Arabian</option>
                <option value="Thoroughbred">Thoroughbred</option>
                </select><br/>
                <label>Horse's Birthdate:</label>
                <select name="month_of_birth" required>
                <option value=" ">--Choose a month</option>
                <option value="Jan">JAN</option>
                <option value="Feb">FEB</option>
                <option value="Mar">MAR</option>
                <option value="Apr">APR</option>
                <option value="May">MAY</option>
                <option value="Jun">JUN</option>
                <option value="Jul">JUL</option>
                <option value="Aug">AUG</option>
                <option value="Sep">SEP</option>
                <option value="Oct">OCT</option>
                <option value="Nov">NOV</option>
                <option value="Dec">DEC</option>
                </select> <label>Year Born:</label>
                <input type="text" name="year_of_birth" required /><br/>
                <label>Horse's Sex:</label>
                <select name="sex" required>
                <option value=" ">--Choose a sex</option>
                <option value="Colt">Colt</option>
                <option value="Filly">Filly</option>
                <option value="Gelding">Gelding</option>
                <option value="Mare">Mare</option>
                <option value="Stallion">Stallion</option>
                </select><br/>
                <label>Horse's Height:</label>
                <input type="text" name="height" required /><br/>
                <label>Color:</label>
                <input type="text" name="color" required /><br/>
                <label>Price:</label>
                <input type="text" name="price" required /><br/>
                <label>Notes:</label>
                <input type="textarea" name="notes" required /><br/>
            </div>
        </div>
    )
}

export default Register;