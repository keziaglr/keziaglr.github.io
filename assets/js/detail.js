import { data } from './data.js'

const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('id');
console.log(index)

function setTechs() {
    let list = 
    document.getElementById("list-tech");

    data[index].tech.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        li.classList.add("badge")
        li.classList.add("btn-small")
        list.appendChild(li);
    });
}

function setTasks() {
    let list = 
    document.getElementById("list-tasks");

    data[index].tasks.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}

function setDesc() {
    let list = 
    document.getElementById("app-desc");

    data[index].desc.forEach((item) => {
        let p = document.createElement("p");
        p.innerHTML = item;
        list.appendChild(p);
    });
}

function setLinks() {
    let list = 
    document.getElementById("app-links");

    let date = document.getElementById("app-date")
    date.innerHTML = "<strong>Project date</strong>: " + data[index].date

    data[index].links.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = "<strong>" + item.type + "</strong>: <a href=" + item.link + ">" + item.link + "</a>";
        list.appendChild(li);
    });
}

function setDetail(){
    let name = document.getElementById("app-name")
    name.innerHTML = data[index].name
    let cover = document.getElementById("img-cover")
    cover.src = data[index].cover
    let icon = document.getElementById("img-icon")
    icon.src = data[index].icon
    setLinks(index)
    setTechs(index)
    setDesc(index)
    setTasks(index)
}

setDetail()