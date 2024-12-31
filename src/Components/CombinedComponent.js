import React, { useState, useEffect } from "react";
import axios from "axios";

function CombinedComponent() {
  const [view, setView] = useState("login"); // 'login', 'signup', or 'products'
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    phonenumber: "",
  });
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  const [products, setProducts] = useState([]);

  // Handle input changes for both forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  // Signup Function
  const handleSignup = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
    alert("Signup successful!");
    setView("login");
  };

  // Login Function
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (
      loginDetails.username === storedUsername &&
      loginDetails.password === storedPassword
    ) {
      sessionStorage.setItem("loggedIn", true);
      alert("Login successful!");
      setView("products");
    } else {
      alert("Invalid username or password!");
    }
  };

  // Fetch Products (protected content)
  useEffect(() => {
    if (view === "products") {
      axios.get("http://localhost:8080/api/createadmin").then((res) => {
        setProducts(res.data);
      });
    }
  }, [view]);

  // Logout Function
  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    setView("login");
  };

  return (
    <div>
      {view === "signup" && (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleInputChange}
              value={user.firstname}
            />
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={user.lastname}
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              value={user.username}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={user.password}
            />
            <br />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={handleInputChange}
              value={user.confirmpassword}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={user.email}
            />
            <br />
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              onChange={handleInputChange}
              value={user.phonenumber}
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={() => setView("login")}>Login</button>
          </p>
        </div>
      )}

      {view === "login" && (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleLoginChange}
              value={loginDetails.username}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleLoginChange}
              value={loginDetails.password}
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button onClick={() => setView("signup")}>Sign Up</button>
          </p>
        </div>
      )}

      {view === "products" && (
        <div>
          <h1>Products</h1>
          <button onClick={handleLogout}>Logout</button>
          {products.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} style={{ width: "150px" }} />
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CombinedComponent;


// import React, { useState } from "react";
// import axios from "axios";

// function CreateAdmin() {
//   const [adminDetails, setAdminDetails] = useState({
//     username: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails({ ...adminDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/createadmin", adminDetails);
//       alert("Admin created successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error creating admin:", error);
//       alert("Failed to create admin.");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Admin</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleInputChange}
//           value={adminDetails.username}
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleInputChange}
//           value={adminDetails.password}
//         />
//         <br />
//         <button type="submit">Create Admin</button>
//       </form>
//     </div>
//   );
// }

// export default CreateAdmin;
