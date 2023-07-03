// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (index1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (index2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (index3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (index4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (index5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (index0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${index0}</li>`;

  getInstruction("mashedPotatoes", 1, (index1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${index1}</li>`;

    getInstruction("mashedPotatoes", 2, (index2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${index2}</li>`;

      getInstruction("mashedPotatoes", 3, (index3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${index3}</li>`;

        getInstruction("mashedPotatoes", 4, (index4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${index4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML +=
            "<li>Mashed potatoes are ready!</li>";
        });
      });
    });
  });
});

// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((index0) => {
    document.querySelector("#steak").innerHTML += `<li>${index0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((index1) => {
    document.querySelector("#steak").innerHTML += `<li>${index1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((index2) => {
    document.querySelector("#steak").innerHTML += `<li>${index2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((index3) => {
    document.querySelector("#steak").innerHTML += `<li>${index3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((index4) => {
    document.querySelector("#steak").innerHTML += `<li>${index4}</li>`;
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
  })
  .catch((error) => {
    console.error(error);
  });

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
