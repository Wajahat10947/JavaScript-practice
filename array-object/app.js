
let list = document.querySelector('ul')

let task = [
        {
            name:'abdullah',
            email:'abc@gmail.com'
        },
        {
            name:'abdullah2',
            email:'abc@gmail.com'
        },
        {
            name:'abdullah3',
            email:'abc@gmail.com'
        }
    ] 


    let listItems1 = document.createElement('LI');
    let listItems2 = document.createElement('LI');
    let listItems3 = document.createElement('LI');

    let text1 = document.createTextNode(task[0].name)
    let text2 = document.createTextNode(task[1].name)
    let text3 = document.createTextNode(task[2].name)

    listItems1.appendChild(text1);
    listItems2.appendChild(text2);
    listItems3.appendChild(text3);


    list.appendChild(listItems1);
    list.appendChild(listItems2);
    list.appendChild(listItems3);
    

    console.log(list);