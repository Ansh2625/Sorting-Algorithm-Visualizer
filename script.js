let array = [];

function generateArray()
{
    const input = document.getElementById('array-input').value;
    array = input.split(',').map(Number);
    renderArray();
}

function renderArray(activeIndex = -1)
{
    const container = document.getElementById('container');
    container.innerHTML = '';
    for(let i=0; i<array.length; i++)
    {
        const number = document.createElement('div');
        number.classList.add('number');
        if(i === activeIndex)
        {
            number.classList.add('active');
        }
        number.textContent = array[i];
        container.appendChild(number);
    }
}
