"use strict"
// fake list
let allBeguins: any = document.getElementById('boton1') as HTMLBodyElement;
allBeguins.addEventListener('click', automaticList);
// buutons actions
(document.getElementById('boton2') as HTMLBodyElement).addEventListener('click', beginTeam);
(document.getElementById('boton3') as HTMLBodyElement).addEventListener('click', modifyTeam);
(document.getElementById('boton4') as HTMLBodyElement).addEventListener('click', deleteTeam);
(document.getElementById('boton5') as HTMLBodyElement).addEventListener('click', newPilot);
(document.getElementById('boton6') as HTMLBodyElement).addEventListener('click', changePilots);
(document.getElementById('boton7') as HTMLBodyElement).addEventListener('click', fireAnyone);
(document.getElementById('boton8') as HTMLBodyElement).addEventListener('click', newMechanic);
(document.getElementById('boton9') as HTMLBodyElement).addEventListener('click', changeMechanics);
(document.getElementById('boton10') as HTMLBodyElement).addEventListener('click', fireAnyone);
(document.getElementById('boton11') as HTMLBodyElement).addEventListener('click', createCar);
(document.getElementById('boton12') as HTMLBodyElement).addEventListener('click', modifyCar);
(document.getElementById('boton13') as HTMLBodyElement).addEventListener('click', deleteCar);
//button2.addEventListener('click', modifyTeam);
//definitions
var car: Car;
var team: Team;
var worker: Worker;
var driver: Driver;
var mechanic: Mechanic;

// all goes in here
var arrTeam: any = [];
// aux arr
var showList: any = [];
// helpers
var counter: number;
var found: boolean;
//print screen
var writeMe: any = document.getElementById('answerMe1') as HTMLInputElement;



// automatic list 
function automaticList(){
    if(arrTeam.length == 0){

    console.log('one ring to rule them all works');

    var team1: Team;
    var team2: Team;
    var team3: Team;
// Pilots
    var driver1: Driver;
    var driver2: Driver;
    var driver3: Driver;
    var driver4: Driver;
    // Mechanics
    var mechanic1: Mechanic;
    var mechanic2: Mechanic;
    var mechanic3: Mechanic;
    var mechanic4: Mechanic;
    // Cars
    var car1: Car;
    var car2: Car;
    var car3: Car;
    var car4: Car;
    //new teams //get in
    arrTeam.push(team1 = new Team("Ferrari", 484000000, "Italy"));
    arrTeam.push(team2 = new Team("Mercedes", 463000000, "Germany"));
    arrTeam.push(team3 = new Team("Maclaren", 285000000, "England"));
   
    console.log(arrTeam);
    //new cars//into the arr of teams
    team1.addCars(car1 = new Car("SF100", 800, 370, "Red", 15000000));
    team2.addCars(car2 = new Car("W11", 800, 375, "Silver", 19000000));
    team3.addCars(car3 = new Car("MCL-35", 800, 355, "Red/Black/Orange", 12500000));
    team3.addCars(car4 = new Car("MCL-34", 700, 300, "Red/Black/Orange", 10000000));
    //pay for the car
    team1.myBudget = team1.myBudget - car1.myPrice;
    team2.myBudget = team2.myBudget - car2.myPrice;
    team3.myBudget = team3.myBudget - car3.myPrice;
    //show it
    car1.myPrice = car1.carGross(); 
    car2.myPrice = car2.carGross(); 
    car3.myPrice = car3.carGross(); 
    car4.myPrice = car4.carGross(); 
    // show waht is left
    team1.myBudget = team1.budgetGross();
    team2.myBudget = team2.budgetGross();
    team3.myBudget = team3.budgetGross();
    // add workers
    team1.addWorkers(mechanic1 = new Mechanic("John", "Wick", 39, 3, 0, "Yes"));
    team1.addWorkers(mechanic4 = new Mechanic("John", "Rambo", 19, 1, 0, "No"));
    team2.addWorkers(mechanic2 = new Mechanic("John", "Wayne", 55, 15, 0, "Yes"));
    team3.addWorkers(mechanic3 = new Mechanic("John", "Woo", 25, 1, 0, "Yes"));
    team1.addWorkers(driver1 = new Driver("Sebastian", "Vettel", 33, 6, 0, 180, 72));
    team2.addWorkers(driver2 = new Driver("Lewis", "Hamilton", 35, 10, 0, 175, 65));
    team2.addWorkers(driver4 = new Driver("Nelson", "Piquet", 55, 1, 0, 170, 50));
    team3.addWorkers(driver3 = new Driver("Carlos", "Sanz jr", 28, 2, 0, 175, 65));
    // how much they earn and weight
    driver1.myWages = driver1.driversGross();
    driver1.height = driver1.driverHeight();
    driver2.myWages = driver2.driversGross();
    driver2.height = driver2.driverHeight();
    driver3.myWages = driver3.driversGross();
    driver3.height = driver3.driverHeight();
    driver4.myWages = driver4.driversGross();
    driver4.height = driver4.driverHeight();
    // mechanics wages
    mechanic1.myWages = mechanic1.mechanicsGross();
    mechanic2.myWages = mechanic2.mechanicsGross();
    mechanic3.myWages = mechanic3.mechanicsGross();
    mechanic4.myWages = mechanic4.mechanicsGross();
    console.log(arrTeam);
    // show in screen
    writeMe.innerText = "Fake List created. Start the exercise now!";
   dissapear();
    } else {
        alert('Fake list already made');
    }
}

/****************************************** TEAM ********************************************/ 
function beginTeam(){
    clearFields();
    // data object
    let str: string = myName();// name team
    let num: number = checkBudget(); // budget team
    let str1: string = myCountry(); // country team
    let text: string = "";
    // 
    let team = checkTeam(str);
    console.log(team);
    if (team == undefined) {
        team = createTeam(str, num, str1);
        text = team.toString();
    } else {
        text = (`${str} is already a team for this season`);
    }
    // show me
    console.log(arrTeam);
    alert(text);
   return writeMe.textContent = text;
    
    
}
// Modify team
function modifyTeam(){
    clearFields();
    let text: string;
   // get name
    let str: string = myName();
    // get the object
    let team = checkTeam(str);
    // if not there
    if (team == undefined) {
        let choice: any = prompt(`The ${str} team doesn't exist. Would you like to build it? \n'YES' press 1 \n 'NO' press 2`);
        choice = parseInt(choice);
        (choice == 1) ? beginTeam() : finalMistake();
        
    } else {
    //questions
    let question: any = prompt("From the team " + str +" what would you like to update: \n Name: " + team.name +" press 1\n Budget: "+ team.budget +" press 2\n Country: " + team.country + " press 3");
    question = parseInt(question);
    // true detective
    found = checkSeason();
    // let's be rational
    if ((question == 1 || question == 3) && found == true) {
        text = `The name ${team.name} & country of origin ${team.country}, can't be changed til the end of the season`;
    } else {
          
        switch (question) {
            case 1:
                team.myName = myName();
                text = `The team's name has been changed to ${team.name}`;
                break;
        
            case 2:
                team.myBudget = checkBudget();
                team.budget = team.budgetGross();
                text = `The budget has been updated to ${team.budget}`;
                break;
        
            case 3:
                let newCountry: string = myCountry();
                if (team.country == newCountry) {
                    text = `${newCountry} is already the hosting country of the team`;
                } else {
                    team.myCountry = newCountry;
                    text = `The new country hosting the team is: ${team.country}`;
                }
                break;
        
            default:
                text =  "Something went wrong updating the team";
                break;
                
        }

    }
    console.log(arrTeam);
    return writeMe.textContent = text;    
   // dissapear();
    
}
}
// DELETE team
function deleteTeam(){
    clearFields();
    let str: string = myName();
    let team: any = checkTeam(str);
    found = false;
    let i: number = 0;
    if (team == undefined) {
        finalMistake();
    } else {
    while (!found && team != undefined && i < arrTeam.length) {
        // iterate with index as referee
        if (arrTeam[i].name === str) {
            //we change the true teller to make it jump out the iteration
            found = true; 
            //katana time
            arrTeam.splice(i, 1);
            //write me
            writeMe.innerText = `The ${str} team is not longer in the database`;
        } 

        i++;
    }
    }
console.log(arrTeam);
dissapear();
}
function teamFirst(): void {
    if (arrTeam.length == 0) {
        alert("There MUST be a team to begun with");
        beginTeam();
    } 
}
/*************************************** CAR **************************************/
function createCar(){
    clearFields();
    teamFirst();
    let name:   string = carName();
    let power:  number = checkPower();
    let maxSpd: number = maxSpeed();
    let color:  string = carColor();
    let price:  number = carPrice();
    // instance new object
    car = new Car(name, power, maxSpd, color, price);
    console.log(car.toString());
    found = pushCarTeam(car);
    (found == false) ?   writeMe.innerHTML =  `${car.toString()} added succesfully to the team.` :
                         writeMe.innerHTML = `A team can't have TWO cars with the same tecnichal settings`;

    dissapear();
}
function pushCarTeam(car: any){
    let name: any = prompt(`In what TEAM does it got this car?\n 'Team List': ${showArrays(arrTeam)}`);
    name = polishName(name);
    let team: any = checkTeam(name);
    // choices
    if(team == undefined){
        let choiceOne: any = prompt(`The ${name} team seems not to be in our database. Would you like to create it?\n'YES' press 1\n 'NO' press 2`);
        choiceOne = parseInt(choiceOne);
        (choiceOne === 1) ? beginTeam() : finalMistake();
    } else {
        found = checkCar(team, car);
    }
    (found == false ) ? team.addCars(car) : found;

    return found;
}
function checkCar (team: any, car: any){
 
    found = false;

    let raceCar: any;

    for(raceCar of team.arrCars){
        // no cheating with the name
        if((raceCar.power == car.power) && (raceCar.maxSpeed == car.maxSpeed) && (raceCar.color == car.color)){
            found = true;
        }
    }
    return found;
}
function modifyCar(){
    
    clearFields();
    teamFirst();
    let nameTeam: any = prompt(`In what TEAM would you like to modify the car?\n 'Team List': ${showArrays(arrTeam)}`);
    nameTeam = polishName(nameTeam);
    let team: any = checkTeam(nameTeam);
    
    if (team.arrCars.length == 0){
        writeMe.innerText = "There are no cars to eliminate in this team";
    } else {
        var carChoice: any = prompt(`Which of the cars listed above would you like to modify?\n ${showArrays(team.arrCars)}`);
        carChoice = polishCar(carChoice);
        
    }

    let theOne: any = team.arrCars.find((e: any) => e.name == carChoice);
    
    let choices: any = prompt(`What would you like to modify:\n 'NAME' press 1\n 'POWER' press 2\n 'MAX SPEED' press 3\n 'COLOR' press 4\n 'PRICE' press 5`)
    choices = parseInt(choices);
    // true detective
    found = checkSeason();
    let text: string = "";
    switch (choices) {
        case 1:
            if(found == true) {
                text = `${theOne.name} can't be changed til the end of the season`;
            } else {
                theOne.myName = prompt("What's the new car's name?");
            }
            break;
    
        case 2:
            theOne.myPower = prompt("Type new powerHorse");
            theOne.myPower = parseInt(theOne.myPower);
            while(isNaN(theOne.myPower)){
                theOne.myPower = prompt("Type new powerHorse");
            }
            theOne.myPower = parseInt(theOne.myPower);
            break;
    
        case 3:
            theOne.myMaxSpeed = prompt("Type new speed");
            theOne.myMaxSpeed = parseInt(theOne.myMaxSpeed);
            while (isNaN(theOne.myMaxSpeed)) {
                theOne.myMaxSpeed = prompt("Type new speed");
            }
            theOne.myMaxSpeed = parseInt(theOne.myMaxSpeed);
            break;
    
        case 4:
            if(found == true) {
                text = `${theOne.name} can't change its ${theOne.color} color til the end of the season`;
            } else {
                theOne.myColor = prompt("What's the new car's color?");
                
            }
            break;
    
        case 5:
            if(found == true) {
                text = `The value of the ${theOne.name} can't be changed til the end of the season`;
            } else {
                theOne.myPrice = prompt("What's the new car's price?");
                theOne.myPrice = parseInt(theOne.myPrice);
                while (isNaN(theOne.myPrice)) {
                    theOne.myPrice = prompt("What's the new car's price?");
                }
            }
            break;
    
        default:

            finalMistake();
            break;
    }
    text = `${theOne.name} updated. ${theOne.toString()}`;
  return  writeMe.textContent = text;

}
function deleteCar(): void{
   clearFields();
   teamFirst();
    let nameTeam: any = prompt(`In what TEAM would you like to retire the car?\n 'Team List': ${showArrays(arrTeam)}`);
    nameTeam = polishName(nameTeam);
    let team: any = checkTeam(nameTeam);
    
    if (team.arrCars.length == 0){
        writeMe.innerText = "There are no cars to eliminate in this team";
    } else {
        var carChoice: any = prompt(`Which of the cars listed above would you like to get rid of?\n ${showArrays(team.arrCars)}`);
        carChoice = polishCar(carChoice);
        
    }
    
    let i:number = 0;
    found = false;
    while (!found && carChoice != team.arrCars.name && i < team.arrCars.length) {
       
        if (team.arrCars[i].name === carChoice) {
            
            found = true; 
           
            team.arrCars.splice(i, 1);
           
            writeMe.innerText = `The ${carChoice} car is not longer in the database`;
           
            console.log(team.arrCars);
        } 
        i++;
    }
  
}
/*****************************************WORKERS******************************************/
function newWorker(){
    console.log('new workers work');
    // common ground
    let name:      any = workerName();
    let surname:   any = workerLast();
    let age:       any = checkAge();
    let yearsWork: any = checkYearsAt();
    let wages:     number = 0;
    let theWorker: any = new TeamWorker(name, surname, age, yearsWork, wages);
// do one thing at the time
return theWorker;
}
// check array into array
function checkWorkers(obj: any) {
    let holder: string = `${obj.name} ${obj.surname}`;
    let i: any;
    let j: number = 0;
    let wholeName: any; 
    let workers: any;
    // true detective
    found = false;
        for ( i in arrTeam){
            for (workers of arrTeam[i].arrWork){
                wholeName = workers.name + " " + workers.surname;
                if ((wholeName == holder) && (workers.age == obj.age)){
                    found = true;
                    // important
                    // wanted to try to be effective without the while, boolean and counter
                    // this function is meant to iterate through two arrays of objects and just when finding a match use the return
                    // to FORCE the function to stop the search
                    // not too much sense when you have 9 workers, but Nestle, Amazon, WalMart and places with 
                    // hundred of thousands of workers might thank me x it
                    (found == true) ? found : undefined; 
                   return found;
                }
            console.log(workers);
        }
        }
}
function listWorkers(){
    let i: any;
    let showList: any = [];
    for (i in arrTeam){
        showList.push(arrTeam[i].arrWork.map((e: any) => e.name + " " + e.surname));
    }
    if(showList.length == 0) {
        alert("There are no workers yet this season");
    } else {
    console.log(showList);
    writeMe.textContent = showList;
    let choice: any = prompt(`The worker you try to fire is on the list?\n ${showList}\n 'Yes' press 1\n 'No' press 2`);
    choice = parseInt(choice);
    (choice == 1) ? choice :
    (choice == 2) ? alert(" Think on hiring a new member for a team? Check the choices in screen") : finalMistake();

    return choice;
    }
}
function fireWorkers(obj: any) {
    let holder: string = `${obj.name} ${obj.surname}`;
    let i: any;
    let j: number = 0;
    let wholeName: any; 
    let workers: any;
    // true detective
    found = false;
        for ( i in arrTeam){
            j = 0;
            for (workers of arrTeam[i].arrWork){
                wholeName = workers.name + " " + workers.surname;
                if ((wholeName == holder) && (workers.age == obj.age)){
                    found = true;
                    arrTeam[i].arrWork.splice(j, 1);
                    writeMe.innerHTML = `${holder} contract has been terminated`;
                   return found;
                }
            console.log(workers);
            j++;
        }
        }
}
// Final destination if it doesn't work
function notPossible(obj: any) {
    clearFields();

    let text: string = `${obj.name} ${obj.surname} already works for another team this season.`;

    alert(text);

    return writeMe.texContent = text;
}
// pick the team to add the new worker
function pickingTeam(){
    let choice: any = prompt(`Which of the teams is going to hire the new member:\n ${showArrays(arrTeam)} \n Type the order number of the team. Ex(Ferrari. Press 1)`);
    let i: string;
    for ( i in arrTeam){
        (i == choice) ? choice : undefined;
    }
    choice = parseInt(choice);
    return choice;
}
// choice of work
function pickingJob(){
    let choice: any = prompt("Mechanic? PRESS 1\n Pilot? PRESS 2");
    choice = parseInt(choice);
    return choice;
}
// fire the workers
function fireAnyone(): void{
    console.log('fire works');
    clearFields();
    let goAhead: number = 0;
    goAhead = listWorkers();
    if(goAhead == 1) {
        // the reason to create the obj worker is to have more than just the name and surname to compare with the arrWork. 
        // two team members might have the same name (Peter Smith) but would be HIGHLY impossible they'll have the same age!
    let theWorker: any = newWorker();
    let holder: string = `${theWorker.name} ${theWorker.surname}`;
    let checkMe: any = fireWorkers(theWorker);
    (checkMe == true ) ? console.log('fire worked') : alert(`${holder} doesn't work in any of the teams this season`);
    }
}


/************************************* PILOTS **************************************/
function newPilot(): void{
   let thePilot: any = newWorker();
   console.log(thePilot);
   let iTeam: number = 0;
   let oneAnother: number = 0;
   let checkMe: any = checkWorkers(thePilot);
   // in real world, same worker, doesn't matter mech or pilot, CAN't work in two teams in the same season
   // picking team in the array
   if (checkMe == true){
       notPossible(thePilot);
    } else {
     iTeam = pickingTeam();
     oneAnother = pickingJob();
         if (oneAnother == 2){
             let height: number = checkHeight();
             let weight: number = checkWeight();
             arrTeam[iTeam - 1].addWorkers(driver = new Driver(thePilot.name, thePilot.surname, thePilot.age, thePilot.yearsAtWork, 0, height, weight));
             driver.myHeight = driver.driverHeight();
             driver.myWages = driver.driversGross();
             console.log(arrTeam);
             writeMe.textContent = driver.toSting();
             alert(driver.toSting());
             
         } else if (oneAnother == 1){
            let question: any = prompt(" You choose to hire a MECHANIC.\n 'YES' press 1\n 'NO' press 2");
            question = parseInt(question);
            counter = 0;
            while (isNaN(question) && counter < 3) {
                question= prompt(" You choose to hire a MECHANIC.\n 'YES' press 1\n 'NO' press 2");
                counter++;
            }
            (question == 1) ? newMechanic() : 
            (question == 2) ? pickingJob() : finalMistake();

         } else{
             finalMistake();
         }
         
    } 
}
function changePilots(){
    console.log('edit pilots work');
    clearFields();
    let i: any;
    let text: string = "";
    // if repeating the operation deleting the arr first
    showList.length = 0;
    console.log(showList);
    for (i in arrTeam){
        (arrTeam[i].arrWork.map((e: any) => (e instanceof Driver) ? showList.push(e) : e));
    }
    console.log(showList);
    if(showList.length == 0) {
        alert("There are no workers yet this season");
    } else {
    console.log(showList);
    let theList = showList.map((e: any) => e.name + " " + e.surname);
    writeMe.textContent = theList;
    let pickUpFirst: any = prompt(`${theList}\n Type ONLY the NAME of the pilot to be upgrated`);
    pickUpFirst = polishName(pickUpFirst);
    let pickUpLast: any = prompt(`${theList}\n ${pickUpFirst}\n Complete ONLY the SURNAME of the pilot to be upgrated`);
    pickUpLast = polishName(pickUpLast);
    let pickUpName: string = pickUpFirst + " " + pickUpLast;
    let findOut: any = matchNames(pickUpName);
    console.log(findOut);
    console.log(pickUpName);
    let whatToChange: any = prompt(`What would you like to change:\n Name: Press 1 \n Surname: Press 2\n Age: Press 3\n Wages: Press 4\n Height: Press 5\n Weight: Press 6\n ALL of them: Press 7 `);
    whatToChange = parseInt(whatToChange);
       

    switch (whatToChange) {
        case 1:
            findOut.myName = workerName();
            text = `Name updated. The pilot's name is now ${findOut.name}`;
            break;
    
        case 2:
            findOut.mySurame = workerLast();
            text = `Surname updated. The pilot's surname is now ${findOut.surname}`;
            break;
    
        case 3:
            findOut.myAge = checkAge();
            text = `Age updated. ${findOut.name} ${findOut.surname} is now ${findOut.age} years old`;
            break;
    
        case 4:
            findOut.myWages = checkWages();
            findOut.myWages = findOut.driversGross();
            text = `Wages updated. ${findOut.name} ${findOut.surname} earns now ${findOut.wages} per season`;
            break;
    
        case 5:
            findOut.myHeight = checkHeight();
            findOut.myHeight = findOut.driverHeight();
            text = `Height driver's updated. ${findOut.name} ${findOut.surname} is now ${findOut.height} tall`;
            break;
    
        case 6:
            findOut.myWeight = checkWeight();
            text = `Weight driver's updated. ${findOut.name} ${findOut.surname} weights ${findOut.weight} Kg`;
            break;
    
        case 7:
            findOut.myName = workerName();
            findOut.mySurame = workerLast();
            findOut.myAge = checkAge();
            findOut.myWages = checkWages();
            findOut.myWages = findOut.driversGross();
            findOut.myHeight = checkHeight();
            findOut.myHeight = findOut.driverHeight();
            findOut.myWeight = checkWeight();
            text =  `${findOut.name} ${findOut.surname} is a new pilot of the team.\n Age: ${findOut.age}.\n Height: ${findOut.height}.\n Weight: ${findOut.weight} Kg.\n Years in the team: ${findOut.yearsAtWork}\n Salary: ${findOut.wages}`;
            break
        default:
           finalMistake();
            break;
    }
    }
     return writeMe.textContent = text;
}
function matchNames(name: string){
    found = false;
    for (let worker of showList){
        console.log(worker);
        let holder: string = `${worker.name} ${worker.surname}`;
    if (holder == name){
            found = true 
        return worker;
    }
}
}
/************************************* MECHANICS **************************************/
function newMechanic(): void{
    clearFields();
    let theMechanic: any = newWorker();
    console.log(theMechanic);
    let iTeam: number = 0;
    let oneAnother: number = 0;
    let checkMe: any = checkWorkers(theMechanic);
    if (checkMe == true){
        notPossible(theMechanic);
     } else {
        iTeam = pickingTeam();
        oneAnother = pickingJob();
        if (oneAnother == 1){
            let graduated: any = checkGraduated();
            arrTeam[iTeam - 1].addWorkers(mechanic = new Mechanic(theMechanic.name, theMechanic.surname, theMechanic.age, theMechanic.yearsAtWork, 0, graduated));
            mechanic.myWages = mechanic.mechanicsGross();
            console.log(arrTeam);
            alert(mechanic.toSting());
            writeMe.textContent = mechanic.toSting();
            
            
        } else if (oneAnother == 2){
           let question: any = prompt(" You choose to hire a PILOT.\n 'YES' press 1\n 'NO' press 2");
           question = parseInt(question);
           counter = 0;
           while (isNaN(question) && counter < 3) {
               question= prompt(" You choose to hire a PILOT.\n 'YES' press 1\n 'NO' press 2");
               counter++;
           }
           (question == 2) ? newMechanic() : 
           (question == 1) ? pickingJob() : finalMistake();

        } else{
            finalMistake();
        } 
          
     } 

}
function changeMechanics(){
    clearFields();
    let i: any;
    let text: string = "";
    // emptying the arr if you repeat the operation
    showList = showList.splice(0, showList.length);
    for (i in arrTeam){
        (arrTeam[i].arrWork.map((e: any) => (e instanceof Mechanic) ? showList.push(e) : e));
    }
    if(showList.length == 0) {
        alert("There are no workers yet this season");
    } else {
    console.log(showList);
    let theList = showList.map((e: any) => e.name + " " + e.surname);
    writeMe.textContent = theList;
    let pickUpFirst: any = prompt(`${theList}\n Type ONLY the NAME of the mechanic to be upgrated`);
    pickUpFirst = polishName(pickUpFirst);
    let pickUpLast: any = prompt(`${theList}\n ${pickUpFirst}\n Complete ONLY the SURNAME of the mechanic to be upgrated`);
    pickUpLast = polishName(pickUpLast);
    let pickUpName: string = pickUpFirst + " " + pickUpLast;
    let findOut: any = matchNames(pickUpName);
    console.log(findOut);
    console.log(pickUpName);
    let whatToChange: any = prompt(`What would you like to change:\n Name: Press 1 \n Surname: Press 2\n Age: Press 3\n Wages: Press 4\n Engineer?: Press 5\n ALL of them: Press 6 `);
    whatToChange = parseInt(whatToChange);
       

    switch (whatToChange) {
        case 1:
            findOut.myName = workerName();
            text = `Name updated. The mechanic's name is now ${findOut.name}`;
            break;
    
        case 2:
            findOut.mySurame = workerLast();
            text = `Surname updated. The mechanic's surname is now ${findOut.surname}`;
            break;
    
        case 3:
            findOut.myAge = checkAge();
            text = `Age updated. ${findOut.name} ${findOut.surname} is now ${findOut.age} years old`;
            break;
    
        case 4:
            findOut.myWages = checkWages();
            findOut.myWages = findOut.mechanicsGross();
            text = `Wages updated. ${findOut.name} ${findOut.surname} earns now ${findOut.wages} per season`;
            break;
    
        case 5:
            findOut.myGraduated = checkGraduated();
            text = ` ${findOut.name} ${findOut.surname} is graduated? ${findOut.graduated}`;
        case 6:

            findOut.myName = workerName();
            findOut.mySurame = workerLast();
            findOut.myAge = checkAge();
            findOut.myWages = checkWages();
            findOut.myWages = findOut.mechanicsGross();
            findOut.myGraduated = checkGraduated();
            text =  `${findOut.name} ${findOut.surname} is a new pilot of the team.\n Age: ${findOut.age}.\n Salary: ${findOut.wages} \n Engineer? : ${findOut.graduated}`;
            console.log(text);
            break
    
        case 7:
         
        default:
           finalMistake();
            break;
    }
    }
     return writeMe.textContent = text;

}

/******************************************************AUX FUNCTIONS*****************************************************/
// TEAM
function myName() {
    // data
    let teamsName: any = (document.getElementById('teamName') as HTMLInputElement).value;
    //you watch their behaviour
    counter = 0;

    //first check
    while((teamsName == "") && counter < 3) {
        teamsName = prompt(`Type the name of the team. You have ${2 - counter} more tries`);
        counter++;
    }
    // work later in checks!
    teamsName = polishName(teamsName);
        // go and fly by yourself
        return teamsName;
}
function myCountry() {
    
    let teamsCountry: any = (document.getElementById('teamCountry') as HTMLInputElement).value;
    
    counter = 0;

    while(teamsCountry == "" && counter < 3) {
        teamsCountry = prompt(`Type the name of the country. You have ${2 - counter} more tries`);
        counter++;
    }
   
    teamsCountry = polishName(teamsCountry);
        
        return teamsCountry;
}
// CAR
function carName() {
    
    let carsName: any = (document.getElementById('carName') as HTMLInputElement).value; 
    counter = 0;

    while((carsName == "") && counter < 3) {
        carsName = prompt(`Type the name of the team. You have ${2 - counter} more tries`);
        counter++;
    }
    carsName = polishCar(carsName);
    return carsName;
}
function carColor() {
   
    let carsColor: any = (document.getElementById('carColor') as HTMLInputElement).value;
    counter = 0;

    while((carsColor == "") && counter < 3) {
        carsColor = prompt(`Type color's car. You have ${2 - counter} more tries`);
        counter++;
    }
    carsColor = polishName(carsColor);
    return carsColor;
}
// WORKERS
function workerName() {
    counter = 0;
    let workersName: any = "";
    while((workersName == "") && counter < 3) {
        workersName = prompt(`Type first name's worker. You have ${2 - counter} more tries`);
        counter++;
    }
    workersName = polishName(workersName);
        return workersName;
}
function workerLast() {
    counter = 0;
    let workersLast: any = "";
    while((workersLast == "") && counter < 3) {
        workersLast= prompt(`Type last name's worker. You have ${2 - counter} more tries`);
        counter++;
    }
    workersLast = polishName(workersLast);
        return workersLast;
}
function checkAge(){

    let age: any = prompt("Worker's age please");
    age = parseInt(age);
    counter = 0;

    while (counter < 3 && (isNaN(age))) {
        age = (prompt(`Type worker's age pls.\n You have ${2 - counter} more tries`));
        age = parseInt(age);
        counter++;
    }
    (counter == 3 && isNaN(age)) ? finalMistake() : age;
    console.log(age);
    return age;
}
function checkWages(){

    let wages: any = prompt("Worker's wages please");
    wages = parseInt(wages);
    counter = 0;

    while (counter < 3 && (isNaN(wages))) {
        wages = (prompt(`Type worker's wages pls.\n You have ${2 - counter} more tries`));
        wages = parseInt(wages);
        counter++;
    }
    (counter == 3 && isNaN(wages)) ? finalMistake() : wages;
    console.log(wages);
    return wages;
}

function checkYearsAt(){

    let years: any = prompt("How long has been within the team?");
    years = parseInt(years);
    counter = 0;

    while (counter < 3 && (isNaN(years))) {
        years = (prompt(`Type worker's time inside the team pls.\n You have ${2 - counter} more tries`));
        years = parseInt(years);
        counter++;
    }
    (counter == 3 && isNaN(years)) ? finalMistake() : 
    (years == 0) ? years = 1 : years;
    console.log(years);
    return years;
}
function checkWeight(){

    let weight: any = prompt("Pilot's weight in Kg pls?");
    weight = parseInt(weight);
    counter = 0;

    while (counter < 3 && (isNaN(weight))) {
        weight = (prompt(`Weight in Kg pls.\n You have ${2 - counter} more tries`));
        weight = parseInt(weight);
        counter++;
    }
    (counter == 3 && isNaN(weight)) ? finalMistake() : weight;
    console.log(weight);
    return weight;
}
function checkHeight(){

    let height: any = prompt("Pilot's height in cm pls?");
    height = parseInt(height);
    counter = 0;

    while (counter < 3 && (isNaN(height))) {
        height = (prompt(`Height in cm pls.\n You have ${2 - counter} more tries`));
        height = parseInt(height);
        counter++;
    }
    (counter == 3 && isNaN(height)) ? finalMistake() : height;
    console.log(height);
    return height;
}
function checkGraduated(){
    let text: any = prompt(" Is the new mechanic an engineer? Type 'YES' or 'NO'");
    text = polishName(text);
    return text;
}
// clear string
function polishName(str: string){
    //you don't like white, do you?
    str = str.replace(/\s/g, "");
    // all working class
    str = str.toLowerCase();
    // and now you get bourgouise
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
        // go and fly by yourself
        return str;  
 }
 // clear string AND capitals
 function polishCar(str: string){
    
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();   
    return str;  
 }
 // check number filed
function checkBudget(){

    let budget: any = parseInt((document.getElementById('teamBudget') as HTMLInputElement).value);
    counter = 0;

    while (counter < 3 && (isNaN(budget))) {
        budget = (prompt(`Type full season budget pls.\n Minimum 7 numbers, NO dots, No white spaces.\n You have ${2 - counter} more tries`));
        budget = parseInt(budget);
        counter++;
    }
    (counter == 3 && isNaN(budget)) ? finalMistake() : budget;
    console.log(budget);
    return budget;
}
// power car
function checkPower(){
    let power: any = parseInt((document.getElementById('carPower') as HTMLInputElement).value);
    counter = 0;
    while (counter < 3 && (isNaN(power))) {
        power = (prompt(`Type full car power pls.\n Max 3 numbers, NO dots, No white spaces.\n You have ${2 - counter} more tries`));
        power = parseInt(power);
        counter++;
    }
    (counter == 3 && isNaN(power)) ? finalMistake() : power;
    console.log(power);
    return power;
}
// speed car
function maxSpeed(){
    let maxSpd: any = parseInt((document.getElementById('carMax') as HTMLInputElement).value);
    counter = 0;
    while (counter < 3 && (isNaN(maxSpd))) {
        maxSpd = (prompt(`Type full car maximum speed pls.\n NO dots, No white spaces.\n You have ${2 - counter} more tries`));
        maxSpd = parseInt(maxSpd);
        counter++;
    }
    (counter == 3 && isNaN(maxSpd)) ? finalMistake() : maxSpd;
    console.log(maxSpd);
    return maxSpd;
}
// price car
function carPrice(){
    let priceCar: any = parseInt((document.getElementById('carPrice') as HTMLInputElement).value);
    counter = 0;
    while (counter < 3 && (isNaN(priceCar))) {
        priceCar = (prompt(`Type price's car.\n YES, F1 cars are REALLY expensive.\n Six figure min\n You have ${2 - counter} more tries`));
        priceCar = parseInt(priceCar);
        counter++;
    }
    (counter == 3 && isNaN(priceCar)) ? finalMistake() : priceCar;
    console.log(priceCar);
    return priceCar;
}
// Check arr
function checkTeam(str: string){
    // efectiveness one liner
    let teamOut = arrTeam.find((e: any ) => e.name == str);
    (teamOut != undefined) ? teamOut : teamOut = undefined;
    return teamOut;
}
// show me all the teams
const showArrays = (arr: any) => arr.map((e: any ) => e.name);

// create team
function createTeam(str: string, num: number, str2: string){
    // create object team
    arrTeam.push(team = new Team(str, num, str2)); 
    // fly in your own
    return team;
}
// check dates F1
function checkSeason() {
    // beginning season
    let date1: any = ("19/02");
    let date2: any = ("19/11");
    let actual: any = new Date();
    let actualDay: any = actual.getDate();
    let actualMonth: any = actual.getMonth() + 1;
    let whole: any = `${actualDay}/${actualMonth}`;
    found = false;
    console.log(whole);
    ((whole >= date1) && (whole <= date2)) ? found = true : found;
    return found;
    
}
// clear fileds
function clearFields(){
    writeMe.innerText = "";
}
// final mistake
function finalMistake(){
    clearFields();
    console.log(" A 404(Not Found) Error. Start again pls"); 
    writeMe.innerHTML = " A 404(Not Found) Error. Start again pls"; 
    dissapear();
}
// dissapear
function dissapear(){
    setTimeout(() => {
    clearFields();
}, 5000);
}