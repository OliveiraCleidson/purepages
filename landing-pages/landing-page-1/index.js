
function animatedImages() {
  let myDiv = document.createElement('div')
  myDiv.className = 'image-animation';
  let myImages = ['./assets/image_1.jpg', './assets/image_2.jpg',
    './assets/image_3.jpg', './assets/image_4.jpg'];
  myImages = myImages.map((image, key) => {
    if (key === 0) {
      return image = `<img src='${image}' alt='Image ${key}' id='${key}' class='active' />`;
    } else {
      return image = `<img src='${image}' alt='Image ${key}' id='${key}' class='inactive' />`;
    }
  });
  for (let image of myImages.values()) {
    myDiv.innerHTML = myDiv.innerHTML + image;
  }
  document.querySelector('.main header').appendChild(myDiv);
  let buttonsGroup = document.createElement('div');
  buttonsGroup.className = `buttonsGroup`;
  for (let indexImage of myImages.keys()) {
    buttonsGroup.innerHTML = buttonsGroup.innerHTML + `<button type='button' id=btn${indexImage} onclick='changeImage(${indexImage})' ></button>`;
  }
  myDiv.insertAdjacentElement(`afterend`, buttonsGroup);
  let changeLoop = async () => await setTimeout(() => {
    imgActive = document.querySelector('.main header > .image-animation > img.active ').id;
    if (parseInt(imgActive) + 1 < myImages.length) {
      changeImage(parseInt(imgActive) + 1);
    } else {
      changeImage(0);
    }
    changeLoop();
  }, 3500);
  changeLoop();

  // myDiv.insertAdjacentHTML('afterend', htmlImage);
}

function changeImage(id) {
  let imgToActive = document.getElementById(id);
  let imgActive = document.querySelector('.main header > .image-animation > img.active');
  imgActive.className = 'inactive';
  imgToActive.className = 'active';
  let btnActive = document.getElementById(`btn${parseInt(imgActive.id)}`);
  let btnToActive = document.getElementById(`btn${id}`);
  btnActive.className = 'inactive';
  btnToActive.className = 'active';
}