function convertSpeed (value, param)
{
    if (param===`toMS`)
    {
        console.log(`${value} km/h is ${value*1000/3600} m/s`)
    }
    if (param==`toKMH`)
    {
        console.log(`${value} km/h is ${value*3600/1000} km/h`)
    }
}


function absValue (value)
{
    if (value<0)
    {
        return value*(-1)
    }
    else
    {
        return value
    }
}

function randomNumber(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let student =  
{
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
}

function sampleSwitch(array, count)
{
    let ArrayFunc = []
    for (let a_cnt = 0; a_cnt<=count; a_cnt++)
    {
        ArrayFunc[a_cnt] = array[randomNumber(0,9)]
    }
    return ArrayFunc
}


const a = Number(prompt(`Введите число`))
const  dir = prompt(`Введите направление`)
convertSpeed(a,dir)

console.log(`_______________`)

const b= Number(prompt(`Введите число`))
console.log(` ${b} is ${absValue(b)} ABSed `)

console.log(`_______________`)

console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group}`)

console.log(`_________________`)

const minim = Number(prompt(`Введите миниммум`))
const maximum = Number(prompt(`Введите максимум`))

console.log(`Случайное число между ${minim} и ${maximum} - ${Math.floor(randomNumber(minim,maximum))} `)

console.log(`_________________`)

trialArray = [1,2,3,4,5,6,7,8,9,10]



console.log(sampleSwitch(trialArray,randomNumber(1,5)))