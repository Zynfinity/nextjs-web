"use client";
import { useState } from "react";
export default function BotPage() {
  const [token, setToken] = useState("");
  const handleToken = async () => {
    console.log(token);
    try {
      const response = await fetch("http://127.0.0.1:8000/newBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "asu", token: token }),
        mode: "cors",
      });
      let data = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };
  return (
    <>
      <main className="pt-14 lg:ml-64">
        <div className="container">
          <div className="w-full bg-[#c5eef0] p-4">
            <input
              type="text"
              //   value={token}
              onChange={handleTokenChange}
              placeholder="Token Bot"
            />
            <button onClick={handleToken}>Submit</button>
          </div>
        </div>
      </main>
    </>
  );
}
