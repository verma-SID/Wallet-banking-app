import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    const loginData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 201) {
        window.alert("Successfully Signed Up");
        navigate("/login");
      } else {
        setIsSubmitting(false);
        window.alert("Sign Up Failed. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      {/* ... form fields ... */}
      <div className="col-md-12">
        <button type="submit" className="btn btn-primary">
          {isSubmitting ? "Signing up..." : "Signup"}
        </button>
      </div>
    </form>
  );
}
