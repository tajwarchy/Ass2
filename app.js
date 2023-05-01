// Quote section
const quotes = [
    "Coding like poetry should be short and concise.",
    "It's not a bug; it's an undocumented feature.",
    "First, solve the problem. Then, write the code.",
    "Code is like humor. When you have to explain it, it's bad.",
    "Make it work, make it right, make it fast.",
    "Clean code always looks like it was written by someone who cares.",
    "Of course, bad code can be cleaned up. But it's very expensive."
]

const rand = Math.floor(Math.random() * quotes.length);

const randomQuote = () => {
    const quote = document.getElementById('random-quote');
    quote.innerHTML = `<h3>${quotes[rand]}</h3>`;
}

randomQuote();

const changeToRed = () => {
    const quoteField = document.getElementById('random-quote');
    quoteField.classList.add('add-red');
    quoteField.classList.remove('add-green', 'add-blue', 'add-orange');

}

const changeToGreen = () => {
    const quoteField = document.getElementById('random-quote');
    quoteField.classList.add('add-green');
    quoteField.classList.remove('add-red', 'add-blue', 'add-orange');

}

const changeToBlue = () => {
    const quoteField = document.getElementById('random-quote');
    quoteField.classList.add('add-blue');
    quoteField.classList.remove('add-green', 'add-red', 'add-orange');

}

const changeToOrange = () => {
    const quoteField = document.getElementById('random-quote');
    quoteField.classList.add('add-orange');
    quoteField.classList.remove('add-green', 'add-blue', 'add-red');

}

// Conversion section
const conversion = () => {
    const convertInputField = document.getElementById('convert-input');
    const mySelectField = document.getElementById('my-select');

    const convertInputValue = convertInputField.value;
    const mySelectValue = mySelectField.value;

    const valueField = document.getElementById('value');

    if (mySelectValue === "lb to kg") {
        const value = parseInt(convertInputValue) * 0.4536;
        valueField.innerText = `Converted Value: ${value} Kilograms`;
    }
    else if (mySelectValue === "kg to lb") {
        const value = parseInt(convertInputValue) * 2.2046;
        valueField.innerText = `Converted Value: ${value} Pounds`;
    }
}

// Series Section
const seriesSection = () => {
    const seriesField = document.getElementById('series-text');
    const string = seriesField.value;
    const elements = string.split(',');

    for (let i = 0; i < elements.length; i++) {
        elements[i] = parseInt(elements[i]);
    }

    const add = () => {
        let sum = 0;
        elements.forEach(element => {
            sum += element;
        });

        return sum;
    }
    const average = () => {
        let sum = 0;
        elements.forEach(element => {
            sum += element;
        });
        const avg = sum / elements.length;

        return avg;
    }

    const max = Math.max(...elements);
    const min = Math.min(...elements);
    const sum = add();
    const avg = average();
    const reversed = elements.reverse();

    const seriesSectionField = document.getElementById('series-output');
    seriesSectionField.innerHTML = `
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${avg}</p>
        <p>Reverse Order: ${reversed}</p>
    `;
}

// Magic section
const magicTextField = document.getElementById('magic-text');

const type1 = () => {
    const clear = () => {
        magicTextField.value = '';
    }
    clear();
}

let x = 0;

const type2 = () => {
    const text = magicTextField.value;
    const lines = text.split('\n');
    const current = [];
    const capitalize = () => {
        if (x % 2 == 1) {
            lines.forEach(line => {
                current.push(line.toUpperCase());
            });
        }
        else {
            lines.forEach(line => {
                current.push(line.toLowerCase());
            });
        }

        let totalText = '';
        let c = 1;
        current.forEach(line => {
            if (c < lines.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line
            magicTextField.value = totalText;
            c++;
        });
    }
    x++;
    capitalize();
}

const type3 = () => {
    const text = magicTextField.value;
    const lines = text.split('\n');

    const sort = () => {
        lines.sort();
        let totalText = '';
        let c = 1;
        lines.forEach(line => {
            if (c < lines.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line
            magicTextField.value = totalText;
            c++;
        });
    }
    sort();
}

const type4 = () => {
    const text = magicTextField.value;
    const lines = text.split('\n');

    const reverse = () => {
        lines.reverse();
        let totalText = '';
        let c = 1;
        lines.forEach(line => {
            if (c < lines.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line
            magicTextField.value = totalText;
            c++
        });
    }
    reverse();
}

const type5 = () => {
    const text = magicTextField.value;
    const lines = text.split('\n');
    const current = [];

    const stripBlank = () => {
        lines.forEach(line => {
            current.push(line.trim());
        });
        let totalText = '';
        let c = 1;
        current.forEach(line => {
            if (line !== '' && c < current.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line;
            magicTextField.value = totalText;
            c++;
        });
    }
    stripBlank();
}

const type6 = () => {
    const text = magicTextField.value;
    const lines = text.split('\n');
    const current = [];

    const addNumber = () => {
        let i = 1;
        lines.forEach(line => {
            current.push(`${i}. ${line}`);
            i++;
        });

        let totalText = '';
        let c = 1;
        current.forEach(line => {
            if (c < lines.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line
            magicTextField.value = totalText;
            c++;
        });
    }
    addNumber();
}

const type7 = () => {
    const magicTextField = document.getElementById('magic-text');
    const text = magicTextField.value;
    const lines = text.split('\n');

    const shuffleText = () => {
        let idx = lines.length, randomIndex;

        while (idx != 0) {
            randomIndex = Math.floor(Math.random() * idx);
            idx--;
            [lines[idx], lines[randomIndex]] = [lines[randomIndex], lines[idx]];
        }
        let totalText = '';
        let c = 1;
        lines.forEach(line => {
            if (c < lines.length)
                totalText = totalText + line + '\n';
            else
                totalText = totalText + line;
            magicTextField.value = totalText;
            c++;
        });
    }
    shuffleText();
}

