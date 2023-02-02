import React from 'react'

const makanan = [
    {
        Nama: 'Soto',
        Harga: 5000
    },
    {
        Nama: 'Bakso',
        Harga: 5000
    },
    {
        Nama: 'Empal Gentong',
        Harga: 15000
    },
    {
        Nama: 'Sate Ayam',
        Harga: 15000
    },
];

//Reduce Untuk menghitung total harga

const total_bayar = makanan.reduce((total_harga, makanan) => {
    return total_harga+makanan.Harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {makanan.map((makanan, index) => (
            <li>{index+1}. Menu {makanan.Nama} - Harga {makanan.Harga}</li>
        ))}
      </ul>

      <h2>Map Filter Harga Lebih dari 5000</h2>
      <ul>
        {makanan
        .filter((makanan) => makanan.Harga > 5000)
        .map((makanan, index) => (
            <li>{index+1}. Menu {makanan.Nama} - Harga {makanan.Harga}</li>
        ))}
      </ul>
      //Reduce
      <h2>Total Harga : {total_bayar}</h2>
    </div>
  )
}

export default Map
