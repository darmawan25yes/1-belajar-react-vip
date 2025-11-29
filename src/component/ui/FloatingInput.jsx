import React, { useState } from "react";

const FloatingInput = ({ label, id, type = "text", name, value, onChange }) => {
  // const [value, setValue] = useState(""); // HAPUS INI, kita pakai props
  const [isFocused, setIsFocused] = useState(false);

  // Tentukan apakah label harus melayang
  // Melayang jika: Sedang fokus ATAU sudah memiliki nilai (dari props)
  const isFloating = isFocused || (value && value.length > 0);

  // Kelas dasar yang mengatur posisi label (absolute)
  const baseLabelClasses =
    "absolute left-3 transition-all duration-200 ease-in-out pointer-events-none";

  // Kelas yang menentukan posisi dan gaya label
  const floatingLabelClasses = isFloating
    ? "top-1 text-xs px-1 bg-white text-blue-600 font-medium" // Melayang di atas
    : "top-6 text-base text-gray-500"; // Posisi default (di dalam input)

  // Kelas yang menentukan gaya border input
  const borderClasses = isFocused
    ? "border-2 border-blue-600" // Border saat fokus (Warna biru tebal)
    : "border border-gray-300"; // Border default (Warna abu-abu tipis)

  return (
    // Container untuk relative positioning dan padding atas agar label melayang
    <div className="relative pt-3 w-80">
      <input
        id={id}
        type={type}
        name={name}
        value={value} // Ambil dari props
        onChange={onChange} // Panggil fungsi dari props
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // Gabungkan kelas dasar dan kelas kondisional
        className={`w-full h-12 pt-3 pb-2 px-3 rounded-md outline-none ${borderClasses}`}
      />

      <label
        htmlFor={id}
        // Gabungkan kelas dasar positioning dan kelas floating/default
        className={`${baseLabelClasses} ${floatingLabelClasses}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
