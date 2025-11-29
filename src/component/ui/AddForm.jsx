import { useState } from "react";
import Button from "./Button";
import FloatingInput from "./FloatingInput";

const AddForm = ({ onSubmit }) => {
  // 1. State untuk menyimpan data form
  const [formData, setFormData] = useState({
    namaSimpanan: "",
    simpok: "",
  });

  // 2. Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Salin data lama
      [name]: value, // Update data yang berubah saja
    });
  };

  // 3. Fungsi saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Kirim data state ke App.jsx
    
    // Reset form
    setFormData({
      namaSimpanan: "",
      simpok: "",
    });
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Add Simpanan</h2>
      <form onSubmit={handleSubmit}>
        <FloatingInput
          label="Nama Simpanan"
          type="text"
          name="namaSimpanan"
          value={formData.namaSimpanan} // Kirim nilai dari state
          onChange={handleChange} // Kirim fungsi handler
        />
        <FloatingInput
          label="Simpok"
          type="number"
          name="simpok"
          value={formData.simpok} // Kirim nilai dari state
          onChange={handleChange} // Kirim fungsi handler
        />
        <Button typeBtn="submit">Add</Button>
      </form>
    </div>
  );
};
export default AddForm;
