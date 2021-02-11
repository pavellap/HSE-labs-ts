interface firstNames {
    males: Array<string>,
    females: Array<string>
}

interface personMarks {
    [key: string]: {[key: string]: number}
}
type keyOfFirstNames = keyof firstNames

const compulsorySubjects: Array<string> = ['Математика', 'Русский язык'];
const optionalSubjects: Array<string> = ['Физика', 'Информатика', 'Биология', 'Литература', 'География', 'Иностранный язык']

const firstNames: firstNames = {
    males: ['Павел', 'Александр', 'Максим', 'Фёдор', 'Юрий', 'Евгений'],
    females: ['Мария', 'Наталья', 'Дарья', 'Алина']
}

const lastNames = ['Минин', 'Попов', 'Александров', 'Иванов', 'Михайлов', 'Муравьёв', 'Миночкин'];

function getRandomItemFromArray(array: Array<any>): any {
    return array[Math.floor(Math.random() * array.length)];
}

function createPerson(): string {
    const sex: keyOfFirstNames = getRandomItemFromArray(Object.keys(firstNames));
    return `${getRandomItemFromArray(lastNames) + (sex === 'females' ? "а" : "")} ${getRandomItemFromArray(firstNames[sex])}`
}

function getRandomScore(): number {
    return Math.round(Math.random() * 100)
}

function getPersonsSubjects(amount: number = 4): Array<string> {
    const base: Array<string> = [...compulsorySubjects];
    let leftItems = amount - 2;
    while (leftItems > 0) {
        const randomSubject = getRandomItemFromArray(optionalSubjects);
        if (!base.includes(randomSubject)) {
            base.push(randomSubject);
            leftItems--;
        }
    }
    return base;
}


export function formSample(amount: number = 10) {
    const base: personMarks = {};

    for (let i = 0; i < amount; i++) {
        const person = createPerson();
        const subjects = getPersonsSubjects(5);
        base[person] = {};
        subjects.forEach(item =>
            base[person][item] = getRandomScore()
        )
    }
    return base;
}


