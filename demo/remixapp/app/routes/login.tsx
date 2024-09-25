import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset API error before validation
    setApiError(null);

    try {
      // Perform login request to the API
      const response = await fetch("http://localhost:5000/person/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login
      const data = await response.json();
      toast.success("Login successful!"); // Show success toast

      // Store the token in session storage
      sessionStorage.setItem("authToken", data.token); // Adjust according to your token structure

      // Redirect or perform any action after successful login
      // e.g., window.location.href = '/dashboard';
    } catch (error) {
      // Handle API error or other errors
      toast.error("Login failed. Please try again!"); // Show error toast
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {apiError && <p className="text-red-600">{apiError}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </form>

      {/* Toast Container */}
      <Toaster />
    </div>
  );
}
