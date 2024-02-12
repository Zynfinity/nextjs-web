"use client"
import React, { useRef, useEffect } from "react";

const OutsideClickExample = () => {
  const divRef = useRef();

  const handleOutsideClick = (event) => {
    // Periksa apakah klik terjadi di luar elemen target
    if (divRef.current && !divRef.current.contains(event.target)) {
      console.log("Klik di luar div!");
      // Lakukan aksi yang diinginkan ketika klik di luar div
    }
  };

  useEffect(() => {
    // Tambahkan event listener pada document ketika komponen mount
    document.addEventListener("click", handleOutsideClick);

    // Bersihkan event listener pada document ketika komponen unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={divRef} className="pt-36">
      <p>Elemen yang dapat di-klik</p>
    </div>
  );
};

export default OutsideClickExample;
