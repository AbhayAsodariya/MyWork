"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";

function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (username, password) => {
    // This is a mock authentication. In a real app, you'd make an API call here.
    if (username === "admin" && password === "password") {
      localStorage.setItem("authToken", "mock-jwt-token");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="flex h-screen overflow-hidden bg-slate-50">
      <div className="flex w-full max-w-[1218px] mx-auto">
        <div className="hidden md:flex w-5/12 items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7b10951887564b0381e6ac0a0de8b027ab5c7f0c3cce169fb809b2cd11d925?placeholderIfAbsent=true&apiKey=96fec37e0c544caea912d1419137e19d"
            alt="Login illustration"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-7/12 flex items-center justify-center px-4 md:px-8">
          <LoginForm onLogin={handleLogin} error={error} />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
