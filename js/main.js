const numberInput = document.getElementById('number-input');
const factText = document.getElementById('fact-text');
const factContainer = document.getElementById('fact-container');


function getFact() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                factContainer.style.display = 'block';
                factText.innerText = data;
            } else if (!number) {
                factContainer.style.display = 'none';
            }
        }).catch(err => console.log(err))
}


numberInput.addEventListener('input', getFact);