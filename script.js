
const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

 if (currentHour >= 5 && currentHour < 12) {
   greetingElement.textContent = "Bom dia";
 } else if (currentHour >= 12 && currentHour < 18) {
   greetingElement.textContent = "Boa tarde";
 } else {
   greetingElement.textContent = "Boa noite";
 }





const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth;
  const numColumns = Math.floor(containerWidth / 200); 

  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
  console.log({ container });
  console.log({ numColumns });
});
observer.observe(container);

function fechar(){
  let closed = document.querySelector('.disclaimer-premium')
  closed.style.display = 'none'
}
