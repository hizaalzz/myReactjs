import React from 'react'

//Const tidak bisa dirubah
// const harga = 3000;

// Var bisa dirubah karena sifatnya global
var harga = 20000;
if(true){
    var harga = 30000
}

//Let disarankan jika variable ingin dirubah
// let harga = 20000;

//Tidak akan kebaca
// if(true){
//     let harga = 30000
// }

const Variable = () => {
  return (
    <div>
      <h2>Belajar Variable</h2>
      <h3>Harga : {harga}</h3>
    </div>
  )
}

export default Variable
