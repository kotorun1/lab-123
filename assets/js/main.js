// Задания




// 1)


// function js_style(){
//     let text = document.getElementById('text') ;
//     text.style.fontSize = '96';
//     text.style.color = 'red';
//     text.style.border = '20px solid green';
//     text.style.width = '1000px';
//     text.style.height = '1000px';
//     text.style.background = 'blue';
// }

// 2)
// getFormvalue = function(event) {
//     event.preventDefault()
//     let div = document.createElement('div');
//     div.innerHTML = document.getElementById("fname");.value+" "+document.getElementById("lname").value
//     document.body.append(div);
// }



// 3)

// function getAttributes(){
//     let link = document.getElementById('w3r');
//     let arr = [link.href,link.hreflang,link.rel,link.target,link.type]
//     let div = document.createElement('div');
//     for (let i = 0; i<arr.length;i++){
//     div.innerHTML += '<p class = "paragraph">'+arr[i]+'</p>'

//     }
//     document.body.append(div);
//     document.body.innerHTML += '<style>.paragraph{color:brown;font-size: 50px;}</style>'
// }

//4)
// function insert_Row(){
//     var y = document.getElementById('sampleTable').insertRow(0).insertCell(0);
//     var z = document.getElementById('sampleTable').insertRow(0).insertCell(1);
//     y.innerHTML="New Cell 1";
//     z.innerHTML="New Cell 2";
//     document.getElementById('sampleTable').style.border = 'yellow'
//     document.getElementById('sampleTable').style.background = 'blue'
// }

// 5)
// let row = prompt('Введите номер строки')
// let cell = prompt('Введите номер столбца')
// let content = prompt('Введите будущий текст ячейки')
// let myTable = document.getElementById('myTable')
// myTable.children[0].children[row -1].children[cell -1].innerHTML = content

// 7)

// function removecolor(){
//     let colorS = document.getElementById('colorSelect');
//     let selectedCol = colorS.options[colorS.selectedIndex]
//     let div = document.createElement('div');
//     div.innerHTML += 'Элемент '+selectedCol.value+' был удалён'
//     document.body.append(div);
//     colorS.removeChild(selectedCol)
// }


// 9)



// let EemployeesCounter = document.getElementById('EemployeesCounter')
// let slideCounter = document.getElementById('slideCounter')
// slideCounter.value = EemployeesCounter.value

// function Calculate(){
//     let Services = document.getElementById('Services').options[document.getElementById('Services').selectedIndex].value
//     let PrimaryDocumentsValue = 0
//     let Accountant = document.getElementById('Accountant')
//     if (Accountant.checked) {
//         PrimaryDocumentsValue = Accountant.value
//     }
//     alert('много')
    


// }

