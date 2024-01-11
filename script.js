const students = [
    {
        name: "Alice",
        surname: "Johnson",
        isSuccessful: false,
        age: 25,
        department: "Computer Science",
        class: 2,
    },
    {
        name: "Bob",
        surname: "Smith",
        isSuccessful: false,
        age: 22,
        department: "Mechanical Engineering",
        class: 2,
    },
    {
        name: "Charlie",
        surname: "Brown",
        isSuccessful: true,
        age: 21,
        department: "English Literature",
        class: 3,
    },
    {
        name:"Evelyn",
        surname: "Jackson",
        isSuccessful: true,
        age: 22,
        department: "Software Developer",
        class: 1,
    },
    {
        name:"Jack",
        surname: "Brooklyn",
        isSuccessful: false,
        age:23 ,
        department: "Mathematics",
        class: 2,
    },
    {
        name:"Joe",
        surname: "Biden",
        isSuccessful: true,
        age: 20,
        department: "Politician",
        class: 3,
    },
    {
        name:"Jessica",
        surname: "Alba",
        isSuccessful: false,
        age: 24,
        department: "Biology",
        class: 2,
    },
    {
        name:"Clara",
        surname: "Chain",
        isSuccessful: false,
        age: 21,
        department: "Software Developer",
        class: 1,
    },
];

// const basarisizOgrenciler = students.filter(student => !student.isSuccessful);
// console.log("Başarısız Öğrenciler:", basarisizOgrenciler);
// var displayElement = document.getElementById("displayText");
//     displayElement.innerHTML = (basarisizOgrenciler);

    // function showText() {
    //     var secilenler = document.querySelectorAll('input[name="secenek"]:checked');
    //     var sonuc = "Seçilenler: ";
      
    //     for (var i = 0; i < secilenler.length; i++) {
    //       sonuc += secilenler[i].value + " ";
    //     }
      
    //     document.getElementById("sonuc").innerHTML = sonuc;
    //   }

// firstClassList.forEach(ogrenci);

// const birinciSınıflar = students.filter(student => student.class=1);
// birinciSınıflar.forEach ();
// // const ogrenciAdSoyadListesi = students.map(student => student.name + "" + student.surname);
// // ogrenciAdSoyadListesi.forEach(ogrenci => console.log(ogrenci));

// function showText() {
//     const basariliOgrenciListesi = students.map(student => student.name + student.surname);
//     var displayElement = document.getElementById("displayText");
//     displayElement.innerHTML = (basariliOgrenciListesi);
// }




const ikinciÜçüncüOgrenci = students.slice(2, 4); 
console.log("2 Öğrenci:", ikinciÜçüncüOgrenci);


const clearStudents = students.splice(2,3);
console.log("Silinenler:", clearStudents);


const ikinciSınıflar = students.filter(student => student.class==2);
console.log(ikinciSınıflar);


