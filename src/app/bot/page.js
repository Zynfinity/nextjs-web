"use client";
import { useEffect, useState } from "react";
export default async function BotPage() {
  const response = await fetch("http://127.0.0.1:8000/listbot", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  })
  let data = await response.json();
  return (
    <main className="pt-32 lg:ml-64">
      <div className="container">
        <div className="w-full bg-primary p-4 rounded-lg">
          <h1 className="font-semibold text-lg">List Bot</h1>
          <div className="bg-[#c5eef0] rounded-lg">
            {data.map(bot => {
              return (
                <div key={bot._id} className="flex justify-between p-2">
                  <p className="text-md">{bot.name}</p>
                  <div>
                    <button className="text-sm">Connect</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
}