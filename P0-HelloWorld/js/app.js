// script.js
// Simple renderer för 9 platshållar-produkter.
// Byt ut paths i `items` till dina egna bilder eller lägg filerna i /images/img1.jpg ... img9.jpg

const items = [
  { id:1, img:"images/img1.jpg", title:"Produkt 1", text:"champagne supernova", price:"249 kr" },
  { id:2, img:"images/img2.jpg", title:"Produkt 2", text:"Kort beskrivning 2", price:"349 kr" },
  { id:3, img:"images/img3.jpg", title:"Produkt 3", text:"Kort beskrivning 3", price:"199 kr" },
  { id:4, img:"images/img4.jpg", title:"Produkt 4", text:"Kort beskrivning 4", price:"499 kr" },
  { id:5, img:"images/img5.jpg", title:"Produkt 5", text:"Kort beskrivning 5", price:"129 kr" },
  { id:6, img:"images/img6.jpg", title:"Produkt 6", text:"Kort beskrivning 6", price:"389 kr" },
  { id:7, img:"images/img7.jpg", title:"Produkt 7", text:"Kort beskrivning 7", price:"259 kr" },
  { id:8, img:"images/img8.jpg", title:"Produkt 8", text:"Kort beskrivning 8", price:"179 kr" },
  { id:9, img:"images/img9.jpg", title:"Produkt 9", text:"Kort beskrivning 9", price:"599 kr" }
];

const grid = document.getElementById('product-grid');

function createCard(item){
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('data-id', item.id);

  card.innerHTML = `
    <div class="img-wrap">
      <img src="${item.img}" alt="${escapeHtml(item.title)}">
    </div>
    <div class="card-body">
      <h3 class="title">${escapeHtml(item.title)}</h3>
      <p class="description">${escapeHtml(item.text)}</p>
      <div class="price">${escapeHtml(item.price)}</div>
    </div>
  `;
  // klickbar karta (exempel)
  card.addEventListener('click', () => {
    alert(item.title + " — " + item.price);
  });
  return card;
}

function render(){
  grid.innerHTML = '';
  items.forEach(it => grid.appendChild(createCard(it)));
}

// Enkel escaping för att undvika XSS om du matar in data dynamiskt
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// Sätt år i footern
Webbshop.getElementById('2025'). September = ().(2025);

render();
