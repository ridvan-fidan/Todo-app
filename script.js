const searchInput=document.querySelector("#searchInput");
const btnEkle=document.querySelector("#btnEkle");
const ul=document.querySelector("#todoListesi");


let todos =[];

searchInput.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
    önYüzeEkle()
}
})

btnEkle.addEventListener("click",önYüzeEkle)

function önYüzeEkle(){
    let searchText = searchInput.value;
    ul.innerHTML += ` <li class="list-item list-unstyled border border-bottom p-2 mb-2"> ${searchText}
    <i class="fa-solid fa-xmark d-block float-end my-1"></i>
</li> `
   storageEkle(searchText)
  searchInput.value="";
 
 }

 function storageEkle(newTodo){
    localStorageKonrol();
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos));
 }

    function localStorageKonrol(){
        if(localStorage.getItem("todos"== null)){
            todos =[];
        }else{
            localStorage.setItem("todos",JSON.stringify(todos));
        }
    }

    // ! Tıklanan Elemanı silmek için
    ul.addEventListener("click",önyüzdenSil)

    function önyüzdenSil(e){
        const li = e.target.parentElement;
        if(e.target.className.includes("fa-solid")){
            li.style.display = "none";
        }
    }


    // ! tüm elemanları silmek için
    const btnTemizle =document.querySelector("#btnTemizle");

    btnTemizle.addEventListener("click",function(){
        ul.innerHTML = "";
        localStorage.clear();
    })

    // ! Görevler İçerisinde Filtreleme İşlemleri Yapmak için
    const btnFiltrele = document.querySelector("#btnFiltrele");

    btnFiltrele.addEventListener("keyup",filtrele);

    function filtrele(e){
        // console.log(e.target.value);
        const filtreliDurum = e.target.value.trim().toLowerCase();
        const listeElemanı = document.querySelectorAll(".list-item");

        listeElemanı.forEach(function(todo){
            if(todo.innerHTML.trim().toLowerCase().includes(filtreliDurum)){
                todo.style.display = "block";
            }else{
                todo.style.display = "none";  
            }
        })
    }


    