//your JS code here. If required.
function getRandomNum(min, max) {
	return Math.floor(Math.random()*(max-min+1)) + min;
}

const pr1 = new Promise((resolve) => {
    const timeTaken = getRandomNum(1000, 3000);
    setTimeout(() => {
      resolve(timeTaken);
    }, timeTaken);
  });
  
  const pr2 = new Promise((resolve) => {
    const timeTaken = getRandomNum(1000, 3000);
    setTimeout(() => {
      resolve(timeTaken);
    }, timeTaken);
  });
  
  const pr3 = new Promise((resolve) => {
    const timeTaken = getRandomNum(1000, 3000);
    setTimeout(() => {
      resolve(timeTaken);
    }, timeTaken);
  });

const loadingRow = document.getElementById("loading");
const output = document.getElementById("output");

Promise.all([pr1, pr2, pr3])
.then((times)=>{
    loadingRow.classList.add("hidden");

    let totalTime = 0;
    times.forEach((time, idx) =>{
        totalTime += time;

        const row = document.createElement("tr");
        const prNameCol = document.createElement("td");
        const prTimeCol = document.createElement("td");

        prNameCol.textContent = `Promise ${idx+1}`;
        prTimeCol.textContent = (time/1000).toFixed(3);

        row.appendChild(prNameCol);
        row.appendChild(prTimeCol);
        output.appendChild(row);
    })

    const totalRow = document.createElement("tr");
    const totalNameCol = document.createElement("td");
    const totalTimeCol = document.createElement("td");

	// alert(totalTime)

    totalNameCol.textContent = "Total";
    totalTimeCol.textContent = (totalTime/1000).toFixed(6);

    totalRow.appendChild(totalNameCol);
    totalRow.appendChild(totalTimeCol);
    output.appendChild(totalRow);
})

