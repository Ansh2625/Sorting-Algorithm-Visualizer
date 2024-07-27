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

async function bubbleSort()
{
    let f = 1;

    for(let i=0; i<array.length-1; i++)
    {
        for(let j=0; j<array.length-1-i; j++)
        {
            if(array[j] > array[j+1])
            {
                f = 0;
                [array[j],array[j+1]] = [array[j+1],array[j]];
                renderArray(j+1);
                await new Promise(resolve => setTimeout(resolve,1000));
            }
        }
    }
    renderArray();
}