const students = [
    { name: "John", age: 18, grade: 85, subject: "Mathematics", attendance: 90, activities: ["Chess", "Debate"] },
    { name: "Emma", age: 17, grade: 92, subject: "Science", attendance: 95, activities: ["Swimming", "Art"] },
    { name: "Michael", age: 19, grade: 78, subject: "History", attendance: 85, activities: ["Football", "Drama"] },
    { name: "Sophia", age: 18, grade: 95, subject: "English", attendance: 98, activities: ["Debate", "Music"] },
    { name: "William", age: 17, grade: 88, subject: "Physics", attendance: 92, activities: ["Basketball", "Robotics"] },
    { name: "Olivia", age: 18, grade: 90, subject: "Chemistry", attendance: 94, activities: ["Dance", "Science Club"] },
    { name: "James", age: 19, grade: 82, subject: "Biology", attendance: 88, activities: ["Soccer", "Photography"] },
    { name: "Ava", age: 17, grade: 94, subject: "Mathematics", attendance: 96, activities: ["Tennis", "Poetry"] },
    { name: "Alexander", age: 18, grade: 87, subject: "Computer Science", attendance: 91, activities: ["Coding", "Gaming"] },
    { name: "Isabella", age: 19, grade: 89, subject: "Literature", attendance: 93, activities: ["Theater", "Writing"] },
    { name: "Lucas", age: 18, grade: 91, subject: "Physics", attendance: 89, activities: ["Chess"] },
    { name: "Mia", age: 17, grade: 88, subject: "Biology", attendance: 94, activities: ["Swimming"] },
    { name: "Ethan", age: 19, grade: 85, subject: "Chemistry", attendance: 92, activities: ["Basketball", "Chess", "Robotics"] },
    { name: "Charlotte", age: 18, grade: 93, subject: "Mathematics", attendance: 97, activities: ["Music", "Art", "Poetry"] }
];

const studentList = {}
students.forEach(student => {
    const key = student.subject
    const list = studentList[key] || { grade: 0, count: 0 }
    list.grade += student.grade
    list.count++
    studentList[key] = list
})

for (let key in studentList) {
    studentList[key].grade /= studentList[key].count
}

console.log(studentList)