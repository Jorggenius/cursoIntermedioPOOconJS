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

Object.keys(juan)
Object.getOwnPropertyNames(juan)
Object.entries(juan)
Object.getOwnPropertyDescriptors(juan)
Object.defineProperties(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: true,
    writable: true,
    configurable: true,
})