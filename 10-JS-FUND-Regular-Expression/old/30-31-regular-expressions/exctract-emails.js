function extractEmails(arr = '') {
    let pattern = /(?:^| )(?<email>(?<user>(?:[a-z][a-z0-9\.\-_]+))@(?<host>(?:[a-z0-9\-]+)(?:\.[a-z0-9]+){1,}))/g;
    let emails = arr[0].match(pattern);
    let output = [];
   
    if (emails !== null) {
        for (const email of emails) {
            output.push(email.trim());
        }
    }
    return output.join('\n');
}

// console.log(extractEmails(['Please contact us at: support@github.com.', 'end']));
// console.log(extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']));
// console.log(extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']));