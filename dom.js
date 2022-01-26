//----------------------------------------------------------------------------------------
//*********************************JS DOM TUTORIALS**************************************** */
//You can try this script to better understanding by uncommenting parts block by block(each seperated by their own comments), don't forget to use dom.html

// document.getElementById("Bio").innerHTML = "Ezgi";


// intro1 value assigned to message value;;---------getElementById()

// var intro1 = document.getElementById("intro1");
// var message = document.getElementById("message");
// message.innerHTML = intro1.innerHTML;


//HTML cityNames printed on alert box;;---------getElementsByTagName()

// var Lists = document.getElementsByTagName("ul");
// var cities = Lists[0];
// cities_indexes = cities.getElementsByTagName("li");
// for (let i = 0; i < cities_indexes.length; i++) {
//     alert(cities_indexes[i].innerHTML);
// }


//Reading text that has same class values;;---------getElementsByClassName()

// var ClassIndexes = document.getElementsByClassName("intro1");
// alert(ClassIndexes[0].innerHTML);
// alert(ClassIndexes[1].innerHTML);


//Prints the number of elements that has same class;;---------querySelectorAll()

// var queryElements = document.querySelectorAll("p.intro1");
// alert(queryElements.length);


//prints HTML value by name;;---------getElementsByName()

// var nameElements = document.getElementsByName("CustomerName");
// alert(nameElements[0].value);


//When clicked Ayse on page, div1 text color turn green;;---------addEventListener()

// var person = document.getElementById("person").addEventListener("click", changeColor); //click or mouseover or etc.
// function changeColor(){
//     document.getElementById("div1").style.color = "green";
//     var nameElements = document.getElementsByName("CustomerName");
//     nameElements[0].value = "Elif";
// }

