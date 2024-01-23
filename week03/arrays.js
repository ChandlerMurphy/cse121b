// ------------------------- Mapping

const value = ['one', 'two', 'three'];
const HTMLList = value.map((x) => `<li>${x}</li>)`);

document.getElementById('myList').innerHTML = HTMLList.join();

// ------------------------- Mapping

const grades = ['A', 'B', 'A']
function gradeToPointConverter(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}
const gradesAsPoints = grades.map(gradeToPointConverter);

// ------------------------- Reducing

// const pointsTotal = gradesAsPoints.reduce(function (total, item) { return total + item;});
// const gpa = pointsTotal / gradesAsPoints.length;       or

const pointsTotal = gradesAsPoints.reduce((total, item) => total + item) / gpaPoints.length;

// ------------------------- Filtering

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const result = fruits.filter((word) => word.length > 6)

// ------------------------- indexOf

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let luckIndex = numbers.indexOf(luckNumber);
