function submit() {
    console.log('Entrei');
    let reviews = document.querySelectorAll('input');
    let ratingValue;
    reviews.forEach((review) => {
        if (review.checked) {
            ratingValue = review.value;
        }
    })

    let divToRemove = document.querySelector('.content');
    divToRemove.parentNode.removeChild(divToRemove);

    let divContainer = document.querySelector('.container');

    let newContent = `<div class='new-content'>
    <img src="images/illustration-thank-you.svg" alt="Thank you illistration">
    <h3>You selected ${ratingValue} out of 5</h3>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>
  </div>`
    divContainer.innerHTML = newContent;
}