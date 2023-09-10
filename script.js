function addPoem() {
    const poemInput = document.getElementById('poemInput');
    const poemContainer = document.getElementById('poemContainer');

    const newPoem = document.createElement('div');
    newPoem.className = 'poem';
    newPoem.innerText = poemInput.value;

    poemContainer.appendChild(newPoem);

    poemInput.value = '';
}