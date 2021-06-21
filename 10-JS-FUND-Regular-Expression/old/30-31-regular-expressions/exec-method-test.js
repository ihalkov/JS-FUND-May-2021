// The exec() method executes a search for a match in a specified string. Returns a result array, or null.
// JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g. /foo/g or /foo/y).
// hey store a lastIndex from the previous match.
// Using this internally, exec() can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with String.prototype.match().
