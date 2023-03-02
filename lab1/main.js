let a = prompt("Введите км/x")
let b = prompt("Введите м/c")
console.log(`${a} km/h = ${a*1000/3600} m/s`)
console.log("_____________________");
console.log(`${b} m/s = ${b*3600/1000} km/h`)

const side_a = Number(prompt("Введи A"))
const side_b = Number(prompt("Введи B"))
const side_c = Number(prompt("Введи C"))
if ( side_a + side_b > side_c && side_a + side_c > side_b && side_b + side_c > side_a)
{
    console.log("Треугольник существует")
    console.log(`Периметр = ${side_a+side_b+side_c}`)
    let p_2=(side_a+side_b+side_c)/2
    console.log(`Площадь= ${Math.sqrt(p_2*(p_2-side_a)*(p_2-side_b)*(p_2-side_c))}`)
    console.log(`Соотношение = ${(side_a+side_b+side_c)/(Math.sqrt(p_2*(p_2-side_a)*(p_2-side_b)*(p_2-side_c)))}`)
}
else console.log("Треугольник не существует")

console.log("_____________________");

const count = Number(prompt("Введите число для fizz - buzz"))
if (count===0 || isNaN(count))
{
    alert("Error")
}
else
{
    for(    let a_cnt=0;    a_cnt<=count;    a_cnt++)
    {
        console.log(`${a_cnt}`)

        if (a_cnt%5===0&&a_cnt!==0)
        {
            console.log('fizz buzz')
        }
        else if (a_cnt%2===0)
        {
            console.log('buzz')
        }
        else
        {
            console.log('fizz')
        }
    }
}

console.log("_____________________");

let a_str = Number(prompt('Xmas layers count is .....'))
for (let b_str= 1 ; b_str<=a_str; b_str++)
{
    if (b_str%2!==0)
    {
        console.log('*'.repeat(b_str)+'\n')
    }
    else
    {
        console.log('#'.repeat(b_str)+'\n')
    }
}

console.log("_____________________");

const a_rnd = 6
// console.log(`${a_rnd}`)
while (true)
{
    let input_num = Number(prompt('Введите число'));
    if (isNaN(input_num))
    {
        alert('Ошибка.Введите число')
        continue
    }
    else
    {
        if (input_num===a_rnd)
        {
            console.log('Угадано')
            break;
        }
        else if (input_num>a_rnd)
        {
            console.log('Больше')
        }
        else (input_num<a_rnd)
        {
            console.log('Меньше')
        }
    }
}

console.log("_____________________");


const a_div = Number(prompt(`Введите делимое`))
const b_div = Number(prompt(`Введите делитель a`))
const c_div = Number(prompt(`Введите делитель b`))
if (isNaN(a_div)||isNaN(b_div)||isNaN(c_div))
{
    console.log(`Необходимо ввести числа`)
}
else
{
    if (a_div%b_div===0)
    {
        if (a_div%c_div===0)
        {
            console.log(`true`)
        }
        else
        {
            console.log(`false`)
        }
    }
    else
    {
        console.log(`false`)
    }
}


console.log("_____________________");

const a_seass = Number(prompt(`Введите номер месяца`))
if (isNaN(a_seass))
{
    alert(`Необходимо ввести число`)
}
else
{
    if (a_seass>=1&&a_seass<=12)
    {
        if (a_seass===1  &&  a_seass===2)
        {
            console.log(`1 квартал`)
        }
        else if (a_seass<=5 && a_seass>=3)
        {
            console.log(`2 квартал`)
        }
        else if (a_seass<=8 && a_seass>=6)
        {
            console.log(`3 квартал`)            
        }
        else
        {
            console.log(`4 квартал`)
        }
    }
    else
    {
        alert(`Не номер месяца`)
    }
}