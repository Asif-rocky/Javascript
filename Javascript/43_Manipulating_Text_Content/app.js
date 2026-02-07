const p = document.querySelector("p");

/* innerText */
// innerText returns the visible text content of an element, excluding any hidden elements or extra whitespace. It also processes the text as it would be rendered in the browser, which means it will collapse multiple spaces into a single space and ignore line breaks.
console.log(p.innerText);
// Output:
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis aperiam officia tempora odio odit numquam dolore cumque voluptatibus beatae soluta minus neque consequuntur inventore fugiat, eveniet sapiente enim error. dicta ut dolore, minus doloremque? Aliquam dolor aspernatur, vitae saepe velit laborum nihil laudantium sapiente ipsum odit quia?

/* textContent */
// textContent returns the full text content of an element, including hidden elements and extra whitespace. It does not process the text as it would be rendered in the browser, so it will include all spaces and line breaks as they are in the HTML source.
console.log(p.textContent);
// Output:
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
//   officiis aperiam officia tempora odio odit numquam dolore cumque
//   voluptatibus beatae soluta minus neque
//   consequuntur inventore fugiat, eveniet sapiente enim error.

//     console.log("Asif here");

//   dicta ut dolore, minus doloremque? Aliquam dolor aspernatur, vitae saepe
//   velit laborum nihil laudantium sapiente ipsum odit quia?

/* innerHTML */
// innerHTML returns the HTML content of an element as a string, including any nested HTML tags. It also allows you to set the HTML content of an element, which can be useful for dynamically updating the content of a webpage.
console.log(p.innerHTML);
// Output
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
//       officiis aperiam officia tempora odio odit numquam dolore cumque
//       voluptatibus beatae soluta minus neque
//       <strong>consequuntur inventore fugiat, eveniet sapiente enim error.</strong>
//       <script>
//         console.log("Asif here");
//       </script>
//       dicta ut dolore, minus doloremque? Aliquam dolor aspernatur, vitae saepe
//       velit laborum nihil laudantium sapiente ipsum odit quia?

/* Manipulating text */
const h1 = document.querySelector("h1");
h1.innerText = "Text Changed";
h1.innerHTML = "<em>Asif</em>";
