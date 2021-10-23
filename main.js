/* Create a Student Class where the student:
Properties:

-Basic information
-socialMedia
-approvedCouses
-learningPath
    create a class LearningPath

Methods:

-Add learning path
-Delete learning path
*/


class Course {

    #name; // ES2020 way to declarate a private property https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

    constructor({
        id,
        name,
        teacher,
        blogPost = [],
        questions = [],
        resources = [],
        classes = [],
    }) {
        this.id = id;
        // this._name = name; // Older way to make "private" a property
        this.#name = name;
        this.teacher = teacher;
        this.blogPost = blogPost;
        this.questions = questions;
        this.resources = resources;
        this.classes = classes;
    }

    get name() {
        // return this._name;
        return this.#name;
    }
    set name(newName) {
        if (newName === "Curso Malito") {
            console.error('Web ... no');
        } else {
            // this._name = newName;
            this.#name = newName;
        } 
    }


    addClass(newClass) {
        return this.classes.push(newClass);
    }
}


class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse(newCourse) {
        return this.courses.push(newCourse);
    }
    
}


class Student {
    constructor({
        fistName,
        lastName,
        email,
        username,
        instagram = undefined,
        tweeter = undefined,
        facebook = undefined,
        learningPath = [],
        approvedCourses = [],
    }) {
        this.fistName = fistName; 
        this.lastName = lastName; 
        this.email = email; 
        this.username = username; 
        this.socialMedia = {
            instagram,
            tweeter,
            facebook,
        }
        this.learningPath = learningPath;
        this.approvedCourses = approvedCourses;
    }

    addLearningPath(LearningPath) {
        return this.learningPath.push(LearningPath);
    }
}


const cursoDefinitivoHtmlCSS = new Course ({
    id: 01,
    name: "Curso Definitivo de HTML y CSS",
    teacher: "Diego de Granda",
});

const webDev = new LearningPath ({
    id: 01,
    name: "Web Dev",
    courses: [
        "curso de HTML y CSS profesional",
    ],
})

const dataScience = new LearningPath ({
    id: 02,
    name: "Data Science",
    courses: [
        "Curso de dataViz",
    ],
});

const miguel = new Student ({
    fistName: "Miguel",
    lastName: "Lopez",
    email: "miguel@gmail.com",
    username: "miguelito",
    instagram: "miguelito1",
    learningPath: [
        webDev,
    ],
});