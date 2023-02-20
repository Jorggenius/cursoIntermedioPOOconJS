const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["curso 1"],
    addCourses(newCourse){
        console.log("This", this)
        console.log("this.approvedcourses", this.approvedCourses)
        this.approvedCourses.push(newCourse)
    }
}

// Object.keys(juan)
// Object.getOwnPropertyNames(juan)
// Object.entries(juan)

Object.defineProperties(juan, "Navigator", {
    value: "chrome",
    enumerable: false,
    writable: true,
    configurable: true,
})
Object.defineProperties(juan, "editor", {
    value: "VScode",
    enumerable: true,
    writable: false,
    configurable: true,
})
Object.defineProperties(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
})
Object.defineProperties(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
})

Object.getOwnPropertyDescriptors(juan)
