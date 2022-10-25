import _ from 'lodash';

function swatch(color) {
    console.log(`Swatch: ${color}`);
    return `Swatch ${color}`;
}

const memoedSwatch = _.memoize(swatch);

memoedSwatch("red");
memoedSwatch("blue");
memoedSwatch("red");
memoedSwatch("blue");