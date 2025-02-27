import React, { useState } from 'react';

function Greeting(props) {
  // Mendeklarasikan state untuk pesan
  const [message, setMessage] = useState("Selamat datang!");

  // Fungsi untuk mengubah pesan ketika tombol ditekan
  const changeMessage = () => {
    setMessage("Pesan telah diubah!");
  };

  return (
    <div>
      <h2>{props.name}, {message}</h2>
      <button onClick={changeMessage}>Ubah Pesan</button>
    </div>
  );
}

export default Greeting;
