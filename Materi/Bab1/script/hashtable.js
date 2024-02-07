const eliminasiContent = {
    first: "Dalam persamaan pertama, kita mengalikan kedua sisi dengan 2 pada persamaan kedua agar koefisien y menjadi sama dengan koefisien y pada persamaan pertama.img/eliminasi/elimequal.png",
    second: "Setelah itu, kita akan mengeliminasi variabel dengan mengurangkannya, variabel yang tersisa kemudian akan memberikan salah satu solusi.img/eliminasi/elimop.png",
    third: "Dengan menggunakan salah satu solusi yang telah diperoleh, langkah terakhir adalah melakukan substitusi untuk mendapatkan nilai variabel lainnya.img/eliminasi/sub.png",
}

const graphContent = {
    first: "Pertama, kita mencari titik potong untuk kedua sumbu x dan y, sehingga kita bisa memiliki titik yang menghubungkan kedua garis sehingga persamaannya menjadi lebih akurat.img/grafik/point.png",
    second: "Setelah mendapatkan kedua titik, kita menandainya pada koordinat kartesian, langkah berikutnya adalah menghubungkan kedua titik tersebut untuk membentuk sebuah garis persamaan linear.img/grafik/graph.png",
    third: "Terakhir, kita mencari titik potong dari kedua grafik dan mencatat hasilnya untuk mendapatkan solusi.img/grafik/result.png",
}

const gaussContent = {
    first: "",
    second: "",
    third: "",
}

const gaussJordanContent = {
    first: "",
    second: "",
    third: "",
}

const eliminationMap = new Map([
    ["first", eliminasiContent.first],
    ["second", eliminasiContent.second],
    ["third", eliminasiContent.third]
]);

const graphMap = new Map([
    ["first", graphContent.first],
    ["second", graphContent.second],
    ["third", graphContent.third]
]);

const gaussMap = new Map([
    ["first", gaussContent.first],
    ["second", gaussContent.second],
    ["third", gaussContent.third]
]);

const gaussJordanMap = new Map([
    ["first",gaussJordanContent.first],
    ["second", gaussJordanContent.second],
    ["third", gaussJordanContent.third]
]);