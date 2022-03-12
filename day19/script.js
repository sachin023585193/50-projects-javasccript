const Nhour = document.querySelector(".hour");
const Nminute = document.querySelector(".minute");
const Nsecond = document.querySelector(".second");
const dateholder = document.querySelector(".date");

function setTime() {
    let date = new Date();
    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    Nhour.style.transform = `translate(-50%, -100%) rotate(${scaling(hour,1,11,0,360)}deg)`;
    Nminute.style.transform = `translate(-50%, -100%) rotate(${scaling(minute,1,59,0,360)}deg)`;
    Nsecond.style.transform = `translate(-50%, -100%) rotate(${scaling(second,1,59,0,360)}deg)`;
    dateholder.innerHTML = `${hour}:${minute} ${ampm(date.getHours())} <br><p style="font-size:20px;text-align:center;">${date.getFullYear()}/${date.getMonth()}/${date.getDay()}</p>`;
};
setTime();
setInterval(setTime, 1000);

function ampm(ret) {
    return ret >= 12 ? "PM" : "AM";
}

function toggle() {
    const body = document.querySelector("body");
    console.log("sad");
    body.classList.toggle("dark");
}

function scaling(value, value_min, value_max, new_min, new_max) {
    return ((value - value_min) / (value_max - value_min)) * (new_max - new_min) + new_min;
}