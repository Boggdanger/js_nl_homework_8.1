/* 
    TASK 1

    Напишите функцию конструктор, которая создает объект 'comment' со свойствами :
    - id
    - author
    - text

    Создайте с помощью этого конструктора минимум 3 объекта
*/

function Commet(id, author, text){
    this.id = id;
    this.author = author;
    this.text = text;
}

let comment1 = new Commet (12365, 'Stas', 'Hello world');
let comment2 = new Commet (22222, 'Bohdan', 'Привіт Світ');
let comment3 = new Commet (33333, 'Оля', 'Тест');

console.log(comment1);
console.log(comment2);
console.log(comment3);


/*
    TASK 2

    var rex = {
        animal: 'dog',
        makeSound: function(){
            console.log('Гав Гав');
        }
    };

    var charlie = {
        animal: 'dog',
        runFast : function() {
            console.log('I can run very fast');
        }
    }

    var martin = {
        animal: 'dog'
    }

    У нас есть три собаки. Собака rex умеет лаять, собака charlie умеет быстро бегать, а вот собака martin к сожалению ничего из этого не может. 
    Научите собаку charlie лаять, а собаку martin и лаять и быстро бегать.

*/

var rex = {
    animal: 'dog',
    makeSound: function(){
        console.log('Гав Гав');
    }
};

var charlie = {
    animal: 'dog',
    runFast : function() {
        console.log('I can run very fast');
    }
}

var martin = {
    animal: 'dog'
}

charlie.__proto__ = rex;
charlie.makeSound()

martin.__proto__ = charlie;
martin.makeSound();
martin.runFast();

/* 
    TASK 3

    Создайте объект работника с именем Евгений, которому 33 года, который работает дизайнером, и у которого зарплата 2500$ в месяц. 
    Сделайте так, чтобы при проверке этого задания я не смог с помощью перебора свойств этого объекта узнать какая зарплата у этого работника.
    Само свойство зарпалат, и его значение должно присутствовать в объекте.

*/

let worker = Object.create({},{
    name: {
        value: 'Євген',
        enumerable: true
    },
    age: {
        value: 33,
        enumerable: true
    },
    workplace: {
        value: 'Дизайнер',
        enumerable: true
    },
    salary: {
        value: '2500$'
    }
});


for(let key in worker){
    console.log(key + ' ' + worker[key]);
}


/* 

    TASK 4

    Выведите на экран текущую дату-время в формате '00:00:00 31.12.2010'.
    Также напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

*/

let myTime = new Date(),
    hh = myTime.getHours(),
    mm = myTime.getMinutes(),
    ss = myTime.getSeconds(),
    dateDay = myTime.getDate(),
    dateMon = myTime.getMonth(),
    dateYear = myTime.getFullYear();


    function addZero(item){
        if(item < 10){
            item = '0' + item;
        }

        return item
    }

    // console.log(addZero(9));

let currentTime = hh + ':' + mm + ':' + addZero(ss) ;
let curDay = addZero(dateDay) + ':' + addZero(dateMon) + ':' + dateYear;


console.log(currentTime + '  ' + curDay)

