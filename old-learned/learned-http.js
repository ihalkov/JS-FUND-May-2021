// HTTP (hyper transfer text protocol)
// protocol (rules and instructions for communications)

// simple protocol which transfer text
// from client to server

// web client is the browser, request, web server response
// web server is specific web software

// Web Server Work MOdel

// Frontend Web Client -> Req
// Backend (uest -> Web Server <-> Technology

// Technology its work is to take files, data and to make code which is text

// Request from client to web server is for this lecture
// Example: facebook.com, the client from this name knows were to make request

// request from web client to server
// Web Client -> HTTP, TCP (transport data), IP (where and how to request to the server), Ethernet (the protocol of signals)
// Media (wires/air/fiber)
// Server -> Ethernet, IP, TCP, HTTP
// Response

// HTTP Request Methods (few request methods) (CRUD)
// POST (Create/store a resource)
// GET (Read/retrieve a resource)
// PUT (Update/modify a resource)
// Delete (Delete/remove a resource)

// Postman is working like web client and we can use it to check how requests are working
// GET the web page, we have the html text

// if we want to test some web server how its working, Postman

// web server and web client are only programs and can be on one computer
// for development we use them (locally)
// IP 127.0.0.1:5500 (the comp we use currently)

// when we do request we do for particular page not for the whole web site

// HTML Forms
// (Form Method and Action)

// Action Attribute (when the data is sent, where to go?)
// Absolute address is the whole address (there is not another like it)
// Relative (locally)

// Browser call local server and say: "Give me index.html",
// local server gives the page
// then we press submit and we send to data.html
// and the server return data.html page

// Method Attribute
// GET Method
// not good to do in application forms

// Post (holds the request form data and the response data)
// all not known characters are coded and are sent that way to server
// Hex Number, with less characters is sent more data

// HTTP Request
// Web application have dynamic, depends who opens it
// its not needed to load the page when we send request to the server
// but always we have request and response

// The server is not remembering from request to request and we have to fake it
// the server is making a list and write some data for the particular user
// this is the cookies
// cookies can be stolen

// for shopping sites cookies remember what we have in the shopping cart
// without registration

// One http request is text based protocol
// which have exact format
// like we talk with someone we use the same language, so we have the same protocol

// Post request (we will send data)
// Response
// 1. Status 200 OK (is best)
// and give info about itself and about content
// 200ths is OK
// 300ths is some redirect
// 400th error with content, but server is working correctly
// 500th error is problem with the server

// Content Type
// specify how the HTTP request/response body should be processed
// Examples:
// Content-Type: application/json
// Content-Type: text/html; charset=utf-8
// Content-Type: application/pdf

// Content-Disposition: attachment; filename="Financial-Report-April-2016.pdf"
// (inline) server say to the page give me this pdf like web page
// attachment (don't show me, download this pdf for me)

// HTTP Conversation: Example
// Deleting Cookies -> F12 -> Application -> cookies
// In cookies are stored only temporary data, when we delete them and load the site again we are like new person
// when we use incognito mode, the server is accepting you like a new person each time

// URL (Uniform Resource Locator)
// the way for unique identification
// http://mysite.com:8080/demo/index.php?id=27&lang=en#lectures
// http (protocol before the ":")
// :// is always there
// mysite.com - host can be IP or domain (which is mapping of IP), logical address from which we can access the server
// :
// 8080 - Port (not mandatory), on which we access the application or web server
// the reason to not write port is because is putted automatically
// https with port 443
// query string start with ?
// id=27&lang=en
// Fragment #lectures (scrolling to given heading in the web page)
// they don't refresh the page

// Query String
// Contains data that is not part of the path structure
// commonly used in searches and dynamic web pages
// query string is after "?"

// URL encoding
// %24...
// characters and not latin letters
// https://bg.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%B8%D1%86%D0%B0

