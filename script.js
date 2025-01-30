document.getElementById('generate').addEventListener('click', function() {
    const numQuantity = Number(document.getElementById('number').value);
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    
    if (isNaN(numQuantity) || numQuantity <= 0 || isNaN(min) || isNaN(max) || min >= max) {
        outputDiv.innerHTML = 'ERRO: Insira um número válido.';
        return;
    }

    if (numQuantity > (max - min + 1)) {
        outputDiv.innerHTML = 'ERRO: O intervalo escolhido é maior que a quantidade de números.';
        return;
    }

    let generatedNumbers = new Set(); 
    
    while (generatedNumbers.size < numQuantity) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        generatedNumbers.add(randomNumber); 
    }

    const sortedNumbers = Array.from(generatedNumbers).sort((a, b) => a - b);

    outputDiv.innerHTML = ''; 
    sortedNumbers.forEach(num => {
        const numberElement = document.createElement('span');
        numberElement.classList.add('number-box');
        numberElement.textContent = num;
        outputDiv.appendChild(numberElement);
    });
});