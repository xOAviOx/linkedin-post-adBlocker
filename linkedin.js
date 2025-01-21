function removeAds() {
  let spans = document.getElementsByTagName("span");

  for (let i = 0; i < spans.length; i++) {
    //check if they contain text "Suggested"

    if (spans[i].innerHTML === "Suggested") {
      //get div that wraps around the entire ad
      let card = spans[i].closest(".fie-impression-container");

      
    }
  }
}
