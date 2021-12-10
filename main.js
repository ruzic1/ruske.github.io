//smooth scroll do odredjenog elementa
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1200);
    return false;
});
//pojavljivanje dugmeta za povratak na pocetak stranice
var pristupDugmetu=document.getElementById("dugmePozivanje");
window.onscroll=function(){scrollFunkcija()};

function scrollFunkcija() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        pristupDugmetu.style.display = "block";
    } else {
        pristupDugmetu.style.display = "none";
    }
}
function scrollFunkcijaVracanje() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//slajder
var IndexSlajda=0;
//prikaziSlajdove();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slajdAnimate");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}




//pojavljivanje segmenata stranice po skrolovanju

$(window).scroll(function(){
    if ($(document).scrollTop() > 1){
        console.log('scroll');
        $('#divToShowHide').addClass('scrollOpcija').css('opacity',1);
        $('#dd33').addClass('scrollOpcija').css('opacity',1);
        $('.card').addClass('scrollOpcija').css('opacity',1);
        $('.novi-cont').addClass('scrollOpcija').css('opacity',1);

    }
    }
);
//FORMA
//izrada DropDown liste dinamicki
var greske=0;

var razmak=document.createElement("br");
var nizOpadajucaLista=new Array("Preko interneta","Od drugara","flajeri");
var tagSelect=document.createElement("select");
tagSelect.setAttribute("id","dropdownKosarka");

var tagPrvaOpcija=document.createElement("option");
tagPrvaOpcija.setAttribute("value","0");
var tekstPrvaOpcija=document.createTextNode("Kako ste saznali za naš klub?");

tagPrvaOpcija.appendChild(tekstPrvaOpcija);
tagSelect.appendChild(tagPrvaOpcija);
for(let i=0;i<nizOpadajucaLista.length;i++)
{
    var tagOstaleOpcije=document.createElement("option");
    tagOstaleOpcije.setAttribute=("value",nizOpadajucaLista[i]);
    var tekstOstaleOpcije=document.createTextNode(nizOpadajucaLista[i]);

    tagOstaleOpcije.appendChild(tekstOstaleOpcije);
    tagSelect.appendChild(tagOstaleOpcije);
}
document.querySelector("#dropdownKosarka").appendChild(tagSelect);

document.getElementById("dugmeSubmitovanje").addEventListener("click",function(){
    var objekat=document.getElementById("dropdownKosarka");
    console.log(objekat);
})

document.getElementById("dugmeSubmitovanje").addEventListener("click",proveraFormulara);
//proveravanje vrednosti forme i obradjivanje gresaka
function proveraFormulara()
{
    var objekatIme,objekatEmail,objekatPol,objekatDropdown,nizPodaci,nizGreske;
    objekatIme=document.getElementById("name");
    objekatEmail=document.getElementById("email");
    objekatLozinka=document.getElementById("lozinka");
    objekatPol=document.getElementsByName("Pol");
    objekatInteresovanje=document.getElementById("dropdownKosarka");
    //ogranicavanje unosa u formi uz pomoc regularnih izraza
    var regex_ime=/^[a-zA-Z ]+$/;
    var regex_mejl=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regex_lozinka=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    //provera imena
    if(objekatIme.value.length<4||objekatIme.value.length>25)
    {   
        
        objekatIme.nextElementSibling.classList.add("prikazivanje");
        greske++;
    }
    else
    {
        if(!regex_ime.test(objekatIme.value))
        {
            objekatIme.nextElementSibling.classList.add("prikazivanje");
            greske++;
        }
        else
        {
        objekatIme.nextElementSibling.classList.remove("prikazivanje");
        //greske--;
        }
    }
    //provera mejla
    if(objekatEmail.value.length<4||objekatEmail.value.length>25)
    {
        objekatEmail.nextElementSibling.classList.add("prikazivanje");
        greske++;
    }
    else
    {
        if(!regex_mejl.test(objekatEmail.value))
        {
            objekatEmail.nextElementSibling.classList.add("prikazivanje");
            greske++;
        }
        else
        {
        objekatEmail.nextElementSibling.classList.remove("prikazivanje");
        //greske--;
        }
    }
    //provera lozinke
    if(objekatLozinka.value.length<4)
    {
        objekatLozinka.nextElementSibling.classList.add("prikazivanje");
        greske++;
    }
    else{
        objekatLozinka.nextElementSibling.classList.remove("prikazivanje");
        //greske--;
    }
    //provera Pola
    var vrednostPol="";
    var niz=[];
    for(let i=0;i<objekatPol.length;i++)
    {
        if(objekatPol[i].checked)
        {
            vrednostPol=objekatPol[i].value;
            break;
        }
    }
    if(vrednostPol=="")
    {
        objekatPol[0].parentElement.parentElement.nextElementSibling.classList.add("prikazivanje");
        greske++;
    }
    else{
        objekatPol[0].parentElement.parentElement.nextElementSibling.classList.remove("prikazivanje");
    }
    console.log(greske);
    if(greske==0)
    {
        alert("Uspesno ste se prijavili!");
    }
}




