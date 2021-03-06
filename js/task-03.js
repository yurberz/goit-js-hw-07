const images = [
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createItem = (images) =>
//   `<li><img src="${images.url}" alt="${images.alt}"></li>`;

// const item = images.map(createItem).join("");

// const galleryRef = document.querySelector("#gallery");
// galleryRef.insertAdjacentHTML("afterbegin", item);

//=== 2 вариант от Валеры
const galleryRef = document.querySelector("#gallery");

images.forEach((el) => {
  galleryRef.insertAdjacentHTML(
    "beforeend",
    `<li><img src="${el.url}" alt="${el.alt}"></li>`
  );
});
