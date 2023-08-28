import { redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
export default function Signup() {
  return (
    <div className="login-content">
        <h1>Signup</h1>
        <SignupForm></SignupForm>
    </div>
  );
}
export async function action({ request, params }) {
  const data = await request.formData();
  const loginData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 201) {
    window.alert("Successfully Signed In");
    return redirect("/");
  } else {
    setTimeout(() => {
      window.location.reload(true);
    }, 2000);
    return response;
  }
}

//Signup Page