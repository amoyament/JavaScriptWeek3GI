// Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
//First we will create a class of people
class People {
  //Now we will create the constructor
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

  exercise() {
    console.log(`I'm not a sporty girl, I hate exercising!`);
  }

  // 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".

  fetchJob() {
    console.log(`${this.name} is a ${this.job} and loves it`);
  }
}

//Now I will create a person from this constructor and log it to ensure it works
const Aubrey = new People("Aubrey", "R2H Apprentice", 30);
console.log(Aubrey);

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

//First I will use the extends keyword to create a subclass of Person called Programmer
class Programmer extends People {
  //Now we will add languages to the Programmer class
  constructor(name, job, age, languages) {
    //Using the super method, we will call on our parent constructor
    super(name, job, age);
    //Next we will add languages and busy status
    this.languages = languages;
    this.busy = true;
  }

  // 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }

  // 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is no.
  offerNewTask() {
    //Create if else statemnt to log one thing if he is busy and another if he is not
    if (this.busy) {
      console.log(
        `${this.name} is super busy! ${this.name} can't accept any new tasks right now, sorry.`
      );
    } else {
      console.log(
        `${this.name} would love to take on a new task. What do you need?`
      );
    }
  }

  // 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
  learnLanguage(language) {
    //Use .push to add this language
    this.languages.push(language);
  }
  listLanguages() {
    //Console log to list languages. Use . join wirh a comma and space to list all known languages in a readable way
    console.log(`${this.name} knows ${this.languages.join(", ")}`);
  }
}

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

let john = new Programmer("John", "Front-End Developer", 30, ["HTML", "CSS"]);
john.fetchJob();
john.exercise();
john.acceptNewTask();
john.offerNewTask();
john.learnLanguage("JavaScript");
john.listLanguages();
