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

async function selectionSort()
{
    for(let i=0; i<array.length-1; i++)
    {
        let minIdx = i;
        for(let j=i+1; j<array.length; j++)
        {
            if(array[j] < array[minIdx])
            {
                minIdx = j;
            }
        }
        if(minIdx != i)
        {
            [array[i],array[minIdx]] = [array[minIdx],array[i]];
            renderArray(i);
            await new Promise(resolve => setTimeout(resolve,1000));
        }
    }
    renderArray();
}

async function insertionSort()
{
    for(let i=1; i<array.length; i++)
    {
        let key = array[i];
        let j = i-1;
        while(j>=0 && array[j]>key)
        {
            array[j+1] = array[j];
            j--;
            renderArray(j+1);
            await new Promise(resolve => setTimeout(resolve,1000));
        }
        array[j+1] = key;
        renderArray(i);
        await new Promise(resolve => setTimeout(resolve,1000));
    }
    renderArray();
}