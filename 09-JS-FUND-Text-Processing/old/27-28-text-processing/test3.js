let str = 'C:\\Projects\\Data-Structures\\LinkedList.cs';
let [file, ext] = str.substring(str.lastIndexOf('\\')+1).split('.');

// LinkedList cs
console.log(file + ' ' + ext);