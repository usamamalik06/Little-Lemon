import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReservationForm(props){
    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

    const [showError, setShowError] = useState(false);
    const [formValid,setFormValid] = useState(false); // eslint-disable-line no-unused-vars

    const [finalTime, setFinalTime] = useState(props.availableTimes.map((times)=> <option>{times}</option>));

    function handleDateChange(e){
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);
           // Update form validation based on your validation logic
        const isFormValid = validateForm(); // Implement your validation logic
         setFormValid(isFormValid);

        setFinalTime(props.availableTimes.map((times)=> <option>{times}</option>));
    }
    function validateForm() {
        // Implement your validation logic here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{11}$/;
        // Check if all required fields are filled
        return fName.trim() !== "" &&
           lName.trim() !== "" &&
           email.trim() !== "" &&
           emailRegex.test(email) && // Validate email format
           tel.trim() !== "" &&
           phoneRegex.test(tel) &&   // Validate phone number format
           people !== "" &&
           date !== "" &&
           finalTime.length > 0;
      }
      const isFormValid = validateForm();
      function handleBookTableClick() {
        if (isFormValid) {
          // Redirect to the confirmation page
          navigate("/confirmation");
        } else {
          // Show error message
          setShowError(true);
        }
      }

    return(
        <form className="reservation-form">
            <div>
                <label htmlFor="fName">First Name</label><br></br>
                <input type="text" id="fName" placeholder="First Name" required minLength={2} maxLength={50}
                    value={fName} onChange={(e)=>setFName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="lName">Last Name</label><br></br>
                <input type="text" id="lName" placeholder="Last Name" required minLength={2} maxLength={50}
                    value={lName} onChange={(e)=>setLName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" id="email" placeholder="Email" required minLength={4} maxLength={200}
                    value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input type="tel" id="tel" placeholder="(xxx)-xxx-xxxx" required minLength={10} maxLength={25}
                    value={tel} onChange={(e)=>setTel(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="people">Number of People</label><br></br>
                <input type="number" id="people" placeholder="Number of People" required minLength={1} maxLength={200}
                    value={people} onChange={(e)=>setPeople(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="date">Select Date</label><br></br>
                <input type="date" id="date" required
                    value={date} onChange={handleDateChange}> 
                </input>
            </div>
            <div>
                <label htmlFor="time">Select Time</label><br></br>
                <select id="time" required>{finalTime}</select>
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date</option>
                    <option>Party</option>
                    <option>None</option>
                </select>
            </div>
            <div>
                <label htmlFor="preferences">Preferences</label> <br></br>
                <select id="preferences" value={preferences} onChange={(e)=> setPreferences(e.target.value)}>
                    <option>Outdoors</option>
                    <option>Indoors</option>
                    <option>Rooftop</option>
                </select>
            </div>
            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments" value={comments} onChange={(e)=>setComments(e.target.value)}></textarea>
            </div>
            <div>
                
                <small>
                    <p> Note: You cannot edit your reservation after submission. Please
                        double-check your answer before submitting your reservation request.
                    </p>
                </small>
                {/* "Book Table" button always visible */}
        <button className="action-button" onClick={handleBookTableClick}>
          Book Table
        </button>
        {/* Error message shown if the form is not valid */}
        {showError && (
          <p className="error-message">Please fill in all required fields.</p>
        )}
            </div>

        </form>
    );
}