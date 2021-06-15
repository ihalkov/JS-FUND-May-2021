function extractFile(str = '') {
    let backSlashInd = str.lastIndexOf('\\');
    let file = str.substring(backSlashInd + 1);
    let lastDotInd = file.lastIndexOf('.');
    let [name, extension] = [file.substring(0, lastDotInd), file.substring(lastDotInd + 1)];
    let output = [];
    output.push(`File name: ${name}`);
    output.push(`File extension: ${extension}`);
    return output.join('\n');
}

// console.log(extractFile('C:\\Internal\\training-internal\\Template.pptx'));
// console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'));