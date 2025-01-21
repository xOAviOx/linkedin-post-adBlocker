function removeAds() {
  let spans = document.getElementsByTagName("span");

  for (let i = 0; i < spans.length; i++) {
    //check if they contain text "Suggested"

    if (spans[i].innerHTML === "Suggested") {
      //get div that wraps around the entire ad
      let card = spans[i].closest(".fie-impression-container");

      if (card === null) {
        let j = 0;
        card = spans[i];

        while (j < 6) {
          card.card.parentNode;
          ++j;
        }
      }

      //making the ad/post dissapear
      card.setAttribute("style", "display:none !important");
    }
  }
}
removeAds();

//ensures ads / posts will be removed as the user scrolls

setInterval(function () {
  removeAds();
}, 100);
