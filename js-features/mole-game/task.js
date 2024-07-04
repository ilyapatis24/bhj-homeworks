let dead = document.getElementById("dead");
let lost = document.getElementById("lost");  

getHole = index => document.getElementById(`hole${index}`);

for (let holeCheck = 1; holeCheck < 10; holeCheck++) {
    let hole = getHole(holeCheck);
    hole.onclick = () => {
      if (hole.className.includes("hole_has-mole")) {
          dead.textContent++;
          if (dead.textContent === "10") {
              alert ("Победа!");
              resetStatistic();
          }
      } 
      else {
        lost.textContent ++;
        if (lost.textContent === "5") {
            alert ("Поражение");
            resetStatistic();
        }
      }
    }
}

resetStatistic = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}