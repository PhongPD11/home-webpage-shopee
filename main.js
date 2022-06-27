const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function () {
    setTimeout(function () {
        stt = Math.floor(Math.random() * 4) + 1;
        document.getElementById("popup-img").src = "/assets/img/popup" + stt + ".png";
        popup.style.display = "block";
    }, 500)
}
close.addEventListener('click', () => {
    popup.style.display = "none";
})
var counter = 1;
function back() {
    counter--;
    if (counter < 1) { counter = 6; }
    document.getElementById('radio' + counter).checked = true;
}
function next() {
    counter++;
    if (counter > 7) { counter = 1; }
    document.getElementById('radio' + counter).checked = true;
}
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 5000);

function listprev() {
    document.getElementById('choose-list1').checked = true;
}
function listnext() {
    document.getElementById('choose-list2').checked = true;
}
function flashsaleprev() {
    document.getElementById('choose-fs1').checked = true;
}
function flashsalenext() {
    document.getElementById('choose-fs2').checked = true;
}

var counter1 = 1;
function smbback() {
    counter1--;
    if (counter1 < 1) { counter1 = 5; }
    document.getElementById('smb' + counter1).checked = true;

}
function smbnext() {
    counter1++;
    if (counter1 > 6) { counter1 = 1; }
    document.getElementById('smb' + counter1).checked = true;

}
setInterval(function () {
    document.getElementById('smb' + counter1).checked = true;
    counter1++;
    if (counter1 > 5) {
        counter1 = 1;
    }
}, 5000);

function smlistprev() {
    document.getElementById('choose-smlist1').checked = true;
}
function smlistnext() {
    document.getElementById('choose-smlist2').checked = true;
}

function topsearchprev() {
    document.getElementById('choose-ts1').checked = true;
}
function topsearchnext() {
    document.getElementById('choose-ts2').checked = true;
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const lists = $$(".tab-list");

const tabActive = $(".tab-item.active");
const line = $(".suggest__tabs .line");

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    const list = lists[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-list.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        list.classList.add("active");
    };
});