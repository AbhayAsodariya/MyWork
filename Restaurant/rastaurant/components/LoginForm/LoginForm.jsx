import React, { useState } from "react";
import InputField from "./InputField";
import CaptchaField from "./CaptchaField";

function LoginForm({ onLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd validate the captcha here
    onLogin(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white rounded-xl shadow-md px-8 py-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold">ResPOS</h1>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-400">
        Welcome Back
      </h2>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="mt-4">
        <InputField
          label="User Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="admin"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          showPasswordToggle
        />
        <CaptchaField
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 mt-6 text-lg font-bold text-white uppercase bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors"
      >
        Log in
      </button>
      <a
        href="#"
        className="block mt-4 text-right text-base font-semibold text-orange-600 hover:text-orange-500 transition-colors"
      >
        Forgot Password?
      </a>
    </form>
  );
}

export default LoginForm;
