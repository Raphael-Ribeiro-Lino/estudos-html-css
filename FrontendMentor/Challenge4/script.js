document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.querySelector(".reaction").innerHTML = `<img src="${data[0].icon}" alt="thunder">
            <h4>${data[0].category}</h4>
            <div class="data-result">
              <p>${data[0].score} <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.memory').innerHTML = `<img src="${data[1].icon}" alt="brain">
            <h4>${data[1].category}</h4>
            <div class="data-result">
              <p>${data[1].score} <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.verbal').innerHTML = `<img src="${data[2].icon}" alt="cloud chat">
            <h4>${data[2].category}</h4>
            <div class="data-result">
              <p>${data[2].score} <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.visual').innerHTML = `<img src="${data[3].icon}" alt="eye">
            <h4>${data[3].category}</h4>
            <div class="data-result">
              <p>${data[3].score} <span class="max-result">/ 100</span></p>
            </div>`;
        })
        .catch(function (error) {
            console.error("Erro ao carregar os dados do JSON: ", error);
            document.querySelector(".reaction").innerHTML = `<img src="./assets/images/icon-reaction.svg" alt="thunder">
            <h4>Reaction</h4>
            <div class="data-result">
              <p>80 <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.memory').innerHTML = `<img src="./assets/images/icon-memory.svg" alt="brain">
            <h4>Memory</h4>
            <div class="data-result">
              <p>92 <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.verbal').innerHTML = `<img src="./assets/images/icon-verbal.svg" alt="cloud chat">
            <h4>Verbal</h4>
            <div class="data-result">
              <p>61 <span class="max-result">/ 100</span></p>
            </div>`;
            document.querySelector('.visual').innerHTML = `<img src="./assets/images/icon-visual.svg" alt="eye">
            <h4>Visual</h4>
            <div class="data-result">
              <p>72 <span class="max-result">/ 100</span></p>
            </div>`;
        });
});





