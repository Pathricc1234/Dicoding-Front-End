const eliminasiContent = {
    first: "Dalam persamaan pertama, kita mengalikan dengan dua pada persamaan pertama agar koefisien y pada persamaan pertama menjadi sama dengan koefisien y pada persamaan kedua.img/eliminasi/elimequal.png",
    second: "Setelah itu, kita akan mengeliminasi variabel dengan mengurangkannya, variabel yang tersisa kemudian akan memberikan salah satu solusi.img/eliminasi/elimop.png",
    third: "Dengan menggunakan salah satu solusi yang telah diperoleh, langkah terakhir adalah melakukan substitusi untuk mendapatkan nilai variabel lainnya.img/eliminasi/sub.png",
}

const graphContent = {
    first: "Pertama, kita mencari titik potong untuk kedua sumbu x dan y, sehingga kita bisa memiliki titik yang menghubungkan kedua garis sehingga persamaannya menjadi lebih akurat.img/grafik/point.png",
    second: "Setelah mendapatkan kedua titik, kita menandainya pada koordinat kartesian, langkah berikutnya adalah menghubungkan kedua titik tersebut untuk membentuk sebuah garis persamaan linear.img/grafik/graph.png",
    third: "Terakhir, kita mencari titik potong dari kedua grafik dan mencatat hasilnya untuk mendapatkan solusi.img/grafik/result.png",
}

const gaussContent = {
    first: "Pertama adalah mengubah bentuk persamaan menjadi bentuk matriks.img/gauss/matrix-g.png",
    second: "Kemudian kita lihat baris pertama, untuk baris pertama dan kolom pertama sudah bernilai satu maka tidak perlu operasi pembagian, setelah itu kita tambah baris kedua dengan baris pertama dan baris ketiga dikurang dengan tiga kali baris pertama.img/gauss/op1-eg.png",
    third: "Selanjutnya, karena baris dua dan kolom kedua bukan bernilai satu maka kita kali negatif satu agar hasilnya menjadi satu.img/gauss/op2-eg.png",
    fourth: "Karena baris kedua dan kolom kedua sudah bernilai satu maka selanjutnya adalah menambahkan baris ketiga dengan sepuluh kali baris kedua.img/gauss/op3-eg.png",
    fifth: "Terakhir adalah mencari nilai z pada baris ketiga, kemudian mencari nilai y dengan mensubtitusikan nilai z ke persamaan baris kedua, dan terakhir mencari nilai x dengan mensubtitusikan nilai y dan z ke persamaan baris satu.img/gauss/sub-eg.png",
}

const gaussJordanContent = {
    first: "Pertama adalah mengubah bentuk persamaan menjadi bentuk matriks.img/gauss/matrix-g.png",
    second: "Kemudian kita lihat baris pertama, untuk baris pertama dan kolom pertama sudah bernilai satu maka tidak perlu operasi pembagian, setelah itu kita tambah baris kedua dengan baris pertama dan baris ketiga dikurang dengan tiga kali baris pertama.img/gauss/op1-eg.png",
    third: "Selanjutnya, karena baris dua dan kolom kedua bukan bernilai satu maka kita kali negatif satu agar hasilnya menjadi satu.img/gauss/op2-eg.png",
    third: "Kemudian, baris pertama dikurangi dengan baris kedua, dan baris ketiga ditambah dengan sepuluh kali baris kedua.img/gaussjordan/op3-egj.png",
    fourth: "Karena baris dan kolom ketiga bukan bernilai satu maka kita bagi dengan negatif 52 agar nilainya menjadi satu.img/gaussjordan/op4-egj.png",
    fifth: "Setelah kolom dan baris ketiga bernilai satu maka langkah terakhir adalah mengurangi baris satu dengan baris tujuh kali baris ketiga dan menambahkan baris kedua dengan lima kali baris ketiga, dan hasil yang didapatkan tidak perlu subtitusi.img/gaussjordan/op5-egj.png",
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
    ["third", gaussContent.third],
    ["fourth", gaussContent.fourth],
    ["fifth", gaussContent.fifth],
]);

const gaussJordanMap = new Map([
    ["first",gaussJordanContent.first],
    ["second", gaussJordanContent.second],
    ["third", gaussJordanContent.third],
    ["fourth", gaussJordanContent.fourth],
    ["fifth", gaussJordanContent.fifth],
]);