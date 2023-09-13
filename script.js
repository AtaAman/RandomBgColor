const start = document.getElementById('start')
const end = document.getElementById('stop')

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
let interval;
start.addEventListener("click", () => {
  function bgcolor(){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  }
  if(!interval){
    interval=setInterval(bgcolor,1000);
  }
});
end.addEventListener("click",() => {
  document.body.style.backgroundColor = "#212121"
  clearInterval(interval)
  interval = null;
})
