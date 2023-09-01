const person ={
    name: 'Pratham',
    place: 'Ahmedabad',
    height: 178,
    weight: 76,
    bmi (){
        return (this.weight/this.height)*10000   
    }
}

console.log(person.bmi());