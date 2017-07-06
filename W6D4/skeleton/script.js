document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  // Get reference to relavant elements
  const favoriteSubmitButton =
    document.getElementsByClassName('favorite-submit')[0];
  const favoriteInput = document.getElementsByClassName('favorite-input')[0];
  const favoriteList = document.getElementById('sf-places');

  // Add listener to button
  favoriteSubmitButton.addEventListener('click', event => {
    event.preventDefault();

    // Get input from textbox
    let favoriteInputText = favoriteInput.value;

    // Make new li element to add
    let newLi = document.createElement('li');
    let newContent = document.createTextNode(favoriteInputText);
    newLi.appendChild(newContent);

    // Add to list
    favoriteList.appendChild(newLi);

    // Clear textbox
    favoriteInput.value = '';
  });



  // adding new photos

  // --- your code here!

  // Get reference to relavant elements
  const photoFormButton =
    document.getElementsByClassName('photo-show-button')[0];
  const photoForm = document.getElementsByClassName('photo-form-container')[0];
  const photoSubmitButton =
    document.getElementsByClassName('photo-url-submit')[0];
  const photoInput = document.getElementsByClassName('photo-url-input')[0];
  const photoList = document.getElementsByClassName('dog-photos')[0];

  // Toggle photo form on button click
  photoFormButton.addEventListener('click', event => {
    event.preventDefault();
    photoForm.classList.toggle('hidden');
  });

  photoSubmitButton.addEventListener('click', event => {
    event.preventDefault();

    // Make new li element to add
    let photoUrl = photoInput.value;

    // Add to list
    let newLi = document.createElement('li');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', photoUrl);
    newLi.appendChild(newImg);

    // Add to list
    photoList.appendChild(newLi);

    // Clear textbox
    photoInput.value = '';
  });
});
