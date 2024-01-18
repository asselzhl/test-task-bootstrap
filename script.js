document.addEventListener('DOMContentLoaded', function () {
    let cardContainer = document.getElementById('cardContainer');

    for (let i = 1; i <= 18; i++) {
        let div = document.createElement('div');
        div.className = 'col';

        let card = document.createElement('div');
        card.className = 'card';

       

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        cardBody.innerHTML = `<img src="./assets/bigPhoto.png" style="max-width:100%" />
        <h5 class="card-title">Без слов</h5>
        `

        
        let button = document.createElement('button');
        button.className = 'btn custom-button'; 
        button.innerHTML = 'Купить';


        cardBody.appendChild(button);
        
        card.appendChild(cardBody);
        div.appendChild(card)
        cardContainer.appendChild(div);
    }
});