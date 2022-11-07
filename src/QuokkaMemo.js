import _ from 'lodash';

function swatch(color) {
    console.log(`Swatch: ${color}`);
    return `Swatch ${color}`;
}

const memoedSwatch = _.memoize(swatch);

// memoedSwatch("red");
// memoedSwatch("blue");
// memoedSwatch("red");
// memoedSwatch("red");
// memoedSwatch("blue");
// memoedSwatch("blue");

const createSwatch = () => {
const prev = {
    color: null,
    result: null
}

return (color) => {
    if (color === prev.color) {
        return prev.result;
    }
    prev.color = color;
    prev.result = swatch(color);
    return prev.result;
    }
}

const swatch1 = createSwatch();
const swatch2 = createSwatch();

swatch1("red");
swatch1("blue");
swatch2("red");
swatch2("blue");
