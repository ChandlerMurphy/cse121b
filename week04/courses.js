const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    studentEnrollment: function (sectionNum, enroll = true) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            if (enroll) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            outputSections(this.sections);
        }
    },
  };

function setNameandCourseNum(course) {
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.innerHTML = course.name;
    courseCode.innerHTML = course.code; 
}

function outputSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`
    );
    document.getElementById("sections").innerHTML = html.join("");
}

setNameandCourseNum(aCourse);
outputSections(aCourse.sections);

document.getElementById("enrollStudent").addEventListener("click", function () {
    const sectionNum = document.getElementById("sectionNumber").value;
    aCourse.studentEnrollment(sectionNum);
})
document.getElementById("dropStudent").addEventListener("click", function () {
    const sectionNum = document.getElementById("sectionNumber").value;
    aCourse.studentEnrollment(sectionNum, enroll = false);
})