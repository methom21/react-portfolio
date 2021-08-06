// Cassie helped me with the contact section
import '../components/Contactform.css'
export default function Contactme () {
    return (
      <>
      <div className="h1-container">
          <h1>Contact Me</h1>
          </div>
          <div className="form-container">
<form>

  <label htmlFor="validationTextarea" className="form-label">First Name</label>
    <input type="text" className="form-control is-invalid" placeholder="Field Required" required aria-label="First name"/>
    <br></br>
  
  <label htmlFor="validationTextarea" className="form-label">Last Name</label>
    <input type="text" className="form-control is-invalid" placeholder="Field Required" required aria-label="Last name"/>
    <br></br>
  
  <label htmlFor="validationTextarea" className="form-label">Email</label>
  <input type="email" className="form-control is-invalid" placeholder="Field Required" required aria-label="Email"/>
  <br></br>
  
  
    <label htmlFor="validationTextarea" className="form-label">Message</label>
    <input className="form-control is-invalid" id="validationMessage" placeholder="Field Required" required/>
    
    <button className="btn btn-info" type="submit">Submit form</button>
  
  
</form>
</div>
   
     </> 
    )

}