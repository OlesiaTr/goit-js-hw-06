const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const makeGalleryList = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" style="width: 320px;"></li>`;
});

const galleryMarkup = makeGalleryList.join(" ");
galleryRef.innerHTML = galleryMarkup;

// Making one <li> with one <img>
// const makeGalleryList = ({ url, alt }) => {
//   const itemEl = document.createElement("li");

//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.style.width = "320px";

//   itemEl.insertAdjacentElement("afterbegin", imgEl);

//   return itemEl;
// };

// // going through all objects of the array
// const elements = images.map(makeGalleryList);

// // inserting markup into HTML
// galleryRef.append(...elements);
