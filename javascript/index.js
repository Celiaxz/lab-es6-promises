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
          document
            .getElementById("mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});
// iteration 1 -asyn/wait
// async function makeMashedPotatoes() {
//   try {
//     const index0 = await obtainInstruction("mashedPotatoes", 0);
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index0}</li>`;

//     const index1 = await obtainInstruction("mashedPotatoes", 1);
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index1}</li>`;

//     const index2 = await obtainInstruction("mashedPotatoes", 2);
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index2}</li>`;

//     const index3 = await obtainInstruction("mashedPotatoes", 3);
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index3}</li>`;

//     const index4 = await obtainInstruction("mashedPotatoes", 4);
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${index4}</li>`;

//     document.querySelector("#mashedPotatoes").innerHTML +=
//       "<li>Mashed potatoes are ready!</li>";
//     document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
//   } catch (error) {
//     console.error(error);
//   }
// }

// makeMashedPotatoes();

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
    return obtainInstruction("steak", 5);
  })
  .then((index5) => {
    document.querySelector("#steak").innerHTML += `<li>${index5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((index6) => {
    document.querySelector("#steak").innerHTML += `<li>${index6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((index7) => {
    document.querySelector("#steak").innerHTML += `<li>${index7}</li>`;
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    document.getElementById("steakImg").removeAttribute("hidden");
  })

  .catch((error) => {
    console.error(error);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const index0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${index0}</li>`;

    const index1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${index1}</li>`;

    const index2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${index2}</li>`;

    const index3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${index3}</li>`;

    const index4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${index4}</li>`;

    const index5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${index5}</li>`;

    const index6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${index6}</li>`;

    document.querySelector("#broccoli").innerHTML +=
      "<li>Broccoli is ready!</li>";
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const obtainInstructionsPromises = brusselsSprouts.map((_, index) =>
  obtainInstruction("brusselsSprouts", index)
);

Promise.all(obtainInstructionsPromises)
  .then((instructions) => {
    const brusselsSproutsList = document.querySelector("#brusselsSprouts");

    instructions.forEach((step) => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });

    brusselsSproutsList.innerHTML += "<li>Brussels sprouts are ready!</li>";

    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  });
