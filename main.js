//synchronous = code that runs top to bottom
//Asynchromouse = code that runs in parallel with other code
//  -meaning that we can have multiple process at the same time



//============================================================
// setTimeout(sayHello,3000)//this is a call back and with 3 seconds
// function sayHello(){
//     alert(`hello`)
// }

// let begin = function () {
//     console.log(`START!!!`)

// }

// let end = function () {// this won't run if the alert is not finished
//     console.log(`FINISH!!`);
// }



// begin()
// end()


//============================================================

//promises = promises are an object that capsulates the result of an asynchronouse operation let
        //- let asynchronouse methods return values like they were synchronous


                        //we use new because promise is a object
                        //in the parameter we can use a function
                                            //in the function paramter we can use resolve or reject or we can call them scenario 1 and 2
const promiseVariable = new Promise(function (resolve,reject) { 
    let fileLoad = true

    if(fileLoad){
        resolve(`file is true`)
    }else{
        reject(`file is false`)
    }
})
//if the promise is resolve then we can invoke the .then method
promiseVariable.then(value => console.log(value))
    //.catch will run if the reject is called otherwise you'll get a n error
    .catch(valueVariable => console.log(valueVariable))



//============================================================
//for this we will say that we will promise to say something after 5 seconds 
 
const waitPromise = new Promise((resolve) =>{// we expect only resolve because the computer cannot mis-count 5 seconds
    setTimeout(resolve,5000) 
})
waitPromise.then(() => console.log(`thanks for waiting`))






                        //remember that time is a parameter in this arrow function
const secondWaitPromise = time => new Promise(resolve => {
    //we passed time as a arguement in resolve(time) so that we can use it in the .then to tell use how muchy time was used
    setTimeout(resolve(time), time)
  

})
//we called secondWaitPromise(time)
                    //then we use the .then after the timeout above is finised
                    //we've passed time in the parameter from the arguement resolve(time) from the promise above
secondWaitPromise(3000).then(time => console.log(`This is the second promise: ${time /= 1000}`))





//============================================================
//============================================================
//============================================================












//my practice lol




const practicePromise = new Promise(function (resolve,reject) {
    let foo = true
    if (foo){
        resolve(`this is resolved`)
    }else{
        reject(`this promise has been rejected. welcome to rust`)
    }
})

                    // there is no need to be an parameter in the arrow function because the reolve and reject from the promise above does not pass down a variable
practicePromise.then((resolve) => console.log(resolve))
                .catch((reject) => console.log(reject))


//============================================================



const secondPractice = new Promise(function (resolve, reject){
    let fiveForJuice = true

    if(fiveForJuice){
        resolve(`I got the juice`)
    }else{
        reject(`you failed the promise now you owe me 5 bucks`)
    }


})


secondPractice.then(resolve => console.log(resolve))




//============================================================


const thirdPractice = new Promise(function(resolve, reject){
    let randomNumber = Math.round(Math.random() * 10)
    console.log(randomNumber)
    if(randomNumber > 5){
        resolve(`the number was higher than 5`)
    }else{
        reject(`the number is below 5`)
    }
})

thirdPractice.then(resolve => console.log(resolve))
            .catch(reject => console.log(reject))

//============================================================



