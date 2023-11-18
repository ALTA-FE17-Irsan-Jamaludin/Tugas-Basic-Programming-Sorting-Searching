type dataKaryawanType = Array<{
  id: number;
  nama: string;
}>;

const dataKaryawan: dataKaryawanType = [
  { id: 101, nama: "Rani" },
  { id: 203, nama: "Andi" },
  { id: 305, nama: "Budi" },
  { id: 410, nama: "Cindy" },
  { id: 520, nama: "Dodi" },
  { id: 635, nama: "Eka" },
  { id: 742, nama: "Fani" },
];

const cariKaryawan = (dataKaryawan: dataKaryawanType, id: number) => {
  let awal: number = 0;
  let akhir: number = dataKaryawan.length;

  while (awal <= akhir) {
    let tengah = Math.floor((awal + akhir) / 2);
    if (dataKaryawan[tengah].id === id) {
      return dataKaryawan[tengah];
    } else if (dataKaryawan[tengah].id > id) {
      akhir = tengah - 1;
    } else {
      awal = tengah + 1;
    }
  }

  return -1;
};

console.log(cariKaryawan(dataKaryawan, 305));
