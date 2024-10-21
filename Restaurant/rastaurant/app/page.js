"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("LoginPage/login");
  }, [router]);

  return null; // Optionally, you can add a loading state or return empty while redirecting.
}
