console.log('June is the best class ever!');
console.log('JS is working');
//variables are also let or const

let populations = [
    {
        "Year": "2018",
        "Population": 327167439,
    },
    {
        "Year": "2017",
        "Population": 325719178,
    },
    {
        "Year": "2016",
        "Population": 323127515,
    },
    {
        "Year": "2015",
        "Population": 321418821,
    },
    {
        "Year": "2014",
        "Population": 318857056,
    },
    {
        "Year": "2013",
        "Population": 316128839,
    }
];


var testVar = 'this is a test';

let ul = document.createElement('ul');

let poplist = document.getElementById('population-list')

poplist.appendChild(ul);

for( let i = 0; i < populations.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += (populations[i].Year + ': ' + populations[i].Population);
}

