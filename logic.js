setInterval(() => {
let hour=document.getElementById(`hour`)
let minute=document.getElementById(`minute`)
let second=document.getElementById(`second`)
  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();
  let hrotation = 30 * htime + mtime / 2;
  let mrotation = 6 * mtime;
  let srotation = 6 * stime;
  hour.style.transform=`rotate(${hrotation}deg)`
  minute.style.transform=`rotate(${mrotation}deg)`
  second.style.transform=`rotate(${srotation}deg)`
}, 1000);
