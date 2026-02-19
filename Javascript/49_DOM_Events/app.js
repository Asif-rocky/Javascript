// BAD WAY
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  alert("Bad way of triggering event");
};

//Note:-
//why inline events and onclick event triggering is bad. Because they can be overwritten, but addEventListener which is described below in great way cannot be overwritten, it will execute no matter what.
//Example of overriding inline / onclick events
// var h = document.getElementById('a');
// h.onclick = doThing_1;
// h.onclick = doThing_2;

// h.addEventListener('click', doThing_3); // this onclick event wont trigger because in below we can another onclick event
// h.addEventListener('click', doThing_4);

// Great way
const best = document.querySelector(".best");
best.addEventListener("click", function () {
  alert("Best way of triggering event");
});

//Event Object
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
});
