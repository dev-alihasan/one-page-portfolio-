"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const filters = document.querySelector("#filters");
  const imgGallery = document.querySelector("#imgGallery");

  const fragment = document.createDocumentFragment();

  // Filter buttons
  const arrayFilters = ["All Works", "HTML", "Wordpress", "bootstrap"];

  // Images

  class cactusImg {
    constructor(title, url, alt, cacType) {
      this.title = title;
      this.url = url;
      this.alt = alt;
      this.cacType = cacType;
    }
  }

  const img1 = new cactusImg(
    "Cactus 1",
    "https://i.ibb.co/dgmKQkb/9.png",
    "cactus 1",
    "HTML"
  );

  const img2 = new cactusImg(
    "Cactus 2",
    "https://i.ibb.co/BrHr5gp/8.png",
    "cactus 2",
    "Wordpress"
  );

  const img3 = new cactusImg(
    "Cactus 3",
    "https://i.ibb.co/j57pJS6/7.png",
    "cactus 3",
    "Wordpress"
  );

  const img4 = new cactusImg(
    "Cactus 4",
    "https://i.ibb.co/rFR8q2y/6.png",
    "cactus 4",
    "bootstrap"
  );

  const img5 = new cactusImg(
    "Cactus 5",
    "https://i.ibb.co/QCs4ycT/5.png",
    "cactus 5",
    "HTML"
  );

  const img6 = new cactusImg(
    "Cactus 6",
    "https://i.ibb.co/VB0N4gg/4.png",
    "cactus 6",
    "HTML"
  );

  const img7 = new cactusImg(
    "Cactus 7",
    "https://i.ibb.co/ZJ3JRCQ/3.png",
    "cactus 7",
    "bootstrap"
  );

  const img8 = new cactusImg(
    "Cactus 8",
    "https://i.ibb.co/ryr3GVC/2.png",
    "cactus 8",
    "bootstrap"
  );

  const img9 = new cactusImg(
    "Cactus 9",
    "https://i.ibb.co/ZgMh3FJ/1.png",
    "cactus 9",
    "Wordpress"
  );

  const arrayImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Events
  filters.addEventListener("click", ({ target }) => {
    if (target.classList.contains("filter-btn")) {
      let current = document.getElementsByClassName("active");
      let found = [];
      imgGallery.innerHTML = "";
      switch (target.id) {
        case "HTML":
          found = arrayImg.filter((object) => object.cacType == "HTML");
          break;
        case "Wordpress":
          found = arrayImg.filter((object) => object.cacType == "Wordpress");
          break;
        case "bootstrap":
          found = arrayImg.filter((object) => object.cacType == "bootstrap");
          break;
        default:
          found = arrayImg;
          break;
      }
      current[0].classList.remove("active");
      target.classList.add("active");

      // Add images to the gallery
      imgGallery.append(showImg(found));
    }
  });
  const createFilters = (array) => {
    array.forEach((item, index) => {
      const btn = document.createElement("button");
      btn.classList.add("filter-btn");
      btn.textContent = item;
      btn.id = item;
      fragment.append(btn);
      if (index == 0) {
        btn.classList.add("active");
      }
    });
    return fragment;
  };

  // Add images to gallery
  const showImg = (array) => {
    array.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.url;
      img.alt = element.alt;
      fragment.append(img);
    });
    return fragment;
  };

  filters.append(createFilters(arrayFilters));
  imgGallery.append(showImg(arrayImg));
}); 
