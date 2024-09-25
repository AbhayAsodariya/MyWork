import { useState } from "react";
import * as Yup from "yup";

// Validation schema using Yup
const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

// Frontend form component
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reset errors and API error before validation
      setErrors({});
      setApiError(null);

      // Validate form data
      await registrationSchema.validate(formData, { abortEarly: false });

      // Send data to API
      const response = await fetch("http://localhost:5000/person/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Handle successful registration (e.g., redirect)
      alert("Registration successful!");
    } catch (error) {
      // Handle validation errors
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      } else {
        // Handle API or other errors
        setApiError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p className="text-red-600" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

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
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p className="text-red-600" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className="block mb-1">
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.mobile ? "true" : undefined}
            aria-describedby="mobile-error"
          />
          {errors.mobile && (
            <p className="text-red-600" id="mobile-error">
              {errors.mobile}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.username ? "true" : undefined}
            aria-describedby="username-error"
          />
          {errors.username && (
            <p className="text-red-600" id="username-error">
              {errors.username}
            </p>
          )}
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
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.password ? "true" : undefined}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p className="text-red-600" id="password-error">
              {errors.password}
            </p>
          )}
        </div>

        {apiError && <p className="text-red-600">{apiError}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
