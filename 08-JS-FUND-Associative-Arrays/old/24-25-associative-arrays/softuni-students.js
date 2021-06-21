function softUniStudents(input = []) {
    function fillCourses(input) {
        let courses = {};
        for (const line of input) {
            if (line.includes(':')) {
                courses = addCourse(courses, line);
            } else if (line.includes('@')) {
                courses = addStudent(courses, line);
            }
        }
        return courses;
    }

    function addStudent(obj = {}, str) {
        // string processing
        let [username, infoStr] = str.split(' with email ');
        let [email, courseName] = infoStr.split(' joins ');
        let temp = username.split('[');
        username = temp[0];
        let credits = Number(temp[1].substring(0, temp[1]. length - 1));

        if (obj.hasOwnProperty(courseName) && obj[courseName].placesLeft > 0) {
            obj[courseName]['students'].push({
                credits: credits,
                username: username,
                email: email
            });
            obj[courseName].updatePlaces();
        }
        return obj;
    }

    function addCourse(obj = {}, str) {
        let [courseName, capacity] = str.split(': ');
        capacity = Number(capacity);

        if (obj.hasOwnProperty(courseName)) {
            obj[courseName].updateCapacity(capacity);
            obj[courseName].updatePlaces();
            return obj;
        }

        obj[courseName] = {
            'capacity': capacity,
            'students': [],
            placesLeft: 0,
            updatePlaces: function () {
                this.placesLeft = this.capacity - this.students.length;
            },
            updateCapacity: function (added) {
                this.capacity = this.capacity + Number(added);
            },
        };
        obj[courseName].updatePlaces();
     
        return obj;
    }

    function getOutput(obj = {}) {
        let sortByCount = Object.entries(obj).sort((a, b) => b[1].students.length - a[1].students.length);
        let output = [];
        for (const [course, courseInfo] of sortByCount) {
            output.push(`${course}: ${courseInfo.placesLeft} places left`);
            let creditsSorted = courseInfo.students.sort((a, b) => b.credits - a.credits);
            for (const currStudent of creditsSorted) {
                output.push(`--- ${currStudent.credits}: ${currStudent.username}, ${currStudent.email}`);
            }
        }
        return output.join('\n');
    }
    
    let courses = fillCourses(input);
    console.log(getOutput(courses));
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);