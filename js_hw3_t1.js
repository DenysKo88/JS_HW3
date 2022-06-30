const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

// from: 09.10.2021
// to: 10.10.2021
const dateFrom = '09.10.2021'; //условия задачи
const dateTo = '10.10.2021'; //условия задачи

function transformDate(stringDate) { //функция переводит наш формат формат даты в международный
    const [day, month, year] = stringDate.split('.'); //дату по точке режет, получаем массив из строчки
    const time = new Date(`${month}.${day}.${year}`).getTime(); // преобразуем даты в таймштамп, 
    return time; // отдаем таймштамп
}

function filterUsers(arr) { //принимаем на вход массив юзер

    const out = arr.filter(object => { //начинаем фильтр юзеров - поштучно по единицам массива
        const {registrationDate} = object; // помещаем в константу дату регистрации юзера

        const currentDate = transformDate(registrationDate); //преобразуем даты юзеров в таймштамп
        const minDate = transformDate(dateFrom);
        const maxDate = transformDate(dateTo);
        
        const isUserValid = minDate <= currentDate && currentDate <= maxDate; //сравниваем, подходит ли в наши условия

        return isUserValid; // возвращает юзеров, которые попадают под условия
    })

    return out; //отдает подходящих юзеров
}


const result = filterUsers(users) 
console.log(result)

