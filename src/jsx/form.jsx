import "./css/form.css";
import InputField from "./inputfield";
import Navbar from "./nav";
import Card from "./displaycard"
function MyForm() {
    return (
        <>
            <Navbar/>
            <div className="myform">
                <div className="FormPurpose">
                    Complaint Cell
                </div>

                {/* complain title input */}
                <InputField Title="Complaint Title" type="text"
                    Placeholder="Enter the Title" />

                {/* Email ID input */}
                <InputField Title="Email ID" type="email" Placeholder="sample@gmail.com" />

                {/* For the complain to write */}
                <InputField Title="Complaint Description" type="text" Placeholder="Enter your Complain" />

                {/* For uploading image     */}
                <div className="image-container">
                    <label>Upload Image</label>
                    <input className="img" type="Image" />
                </div>
            </div>
            <Card title="Stocks" value={2.382}  percentage={12.9}/>
        </>
    );
}

export default MyForm;
