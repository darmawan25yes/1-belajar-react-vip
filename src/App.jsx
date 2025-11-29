import { use } from "react";
import "./App.css";
import AddForm from "./component/ui/AddForm";
import FormLogin from "./component/ui/FormLogin";
import { useState } from "react";
function App() {
  const [daftarSimpanan, setDaftarSimpanan] = useState([
    {
      id: 1,
      nama: "Si Surga",
      simpok: 25000,
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi neque voluptatum accusamus nulla iste explicabo nostrum? Tenetur repellat adipisci, sed saepe voluptatum eveniet fuga dolorum necessitatibus quae esse sint!",
    },
  ]);
  const handleAddProduk = (data) => {
    // Tidak perlu e.preventDefault() lagi karena sudah dihandle di AddForm
    // Tidak perlu FormData lagi karena data sudah matang

    // Membuat objek simpanan baru
    const newSimpanan = {
      id: Date.now(),
      nama: data.namaSimpanan, // Ambil langsung dari parameter
      simpok: data.simpok,     // Ambil langsung dari parameter
      deskripsi: "Deskripsi belum diisi",
    };

    // Menambahkan ke daftar (State)
    setDaftarSimpanan([...daftarSimpanan, newSimpanan]);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 h-screen">
      <div className="bg-white px-5 py-7 rounded-md shadow-md mb-3">
        <FormLogin></FormLogin>
      </div>
      <div className="bg-white px-5 py-7 rounded-md shadow-md">
        <AddForm onSubmit={handleAddProduk}></AddForm>
        {daftarSimpanan.map((item) => {
          return (
            <div key={item.id}>
              <div className="mt-3">
                {item.nama}
                {" -Simpok: Rp."}
                {item.simpok}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
