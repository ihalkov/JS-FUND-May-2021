// Database Basics
    // way to store data which your users will send to your website
    // website or web application
    // website is static every time you open it will be the same
    // web application will be dynamically
        // gmail, facebook
            // enter with username and pass
            // every user has its own data
            // this data has to be saved in database

    // frontend and backend - they are become with equal difficulty and salaries
    // serverless platforms, cloud base, use only frontend and take directly from database

    // Table of Contents
        // Database Management
        // SQL vs. NoSQL
            // sql more for backend
            // nosql more for frontend
        // Database Engine
            // store and the way they are stored
        // Structured Query Language (SQL)
        // MySQL
        // NoSQL and MongoDB

        // What is database?
            // A database is a collection of information that is organized
                // so that is can be easily accessed, managed and updated
            // Modern databases are managed using a Database Management System (DBMS)
                // use case (program who take care of management, access, security, limits)
                // Define database structure, e.g. tables, columns, relations
                // there is way of rules to manage the data base
                // CRUD operations (Create, Read, Update, Delete data)
                // Execute queries (search)
                // binary or text storage of data

                // MySQL
                // MS SQL Server
                // Oracle

                // Storage vs. Management
                    // Conventional Data Storage
                        // Notes
                        // Receipts
                    // We can group related pieces of data into separate columns
                        // Excel
                    // Storing data is not the primary reason to use a Database
                    // Flat storage eventually runs into issues with:
                        // Size
                        // Ease of updating
                        // Ease of searching
                        // Accuracy
                        // Security
                        // Redundancy

            // SQL Databases (Relational Databases)
                // Relational (SQL) databases use structured query
                // language (SQL) for defining and manipulating data
                // This is extremely powerful:
                    // SQL is one of the most versatile and widely-used options available
                    // Making it a safe choice and especially great for complex queries
                // On the other hand, it can be restrictive
                    // Security over performance
                // Relation DB model organized data into one or more tables
                    // of columns and rows with a unique key identifying
                    // each row and foreign keys defining relationships
                    // very often database is like a table
                // Excel is like management system
                    // Every file is like different DB where is stored data
                    // Every table has rows and columns
                    // Every database has N number of tables
                    // Each table has N rows and M cols
                // Databases
                    // tables (rows, cols)
                    // relations
                        // customers unique ID
                        // pesho, email, item, price, data
                        // gosho, email, item2, 12, data
                        // pesho, email, item3, 32, data
                        // gosho, email, item3, 32, data
                        // a lot of duplicates, email of pesho is not changing
                        // items can be the same, price, data
                        // we don't need to duplicate info better to relate one to another

                        // Customer ID --- Name --- Email
                        // 5 --- Peter --- peter@gmail.com
                        // 6 --- Jane --- jayne@gmail.com
                        
                        // Orders
                        // Item ID --- Order ID --- Item --- Amount
                        // 5 --- 1 --- Table --- 200.00
                        // 6 --- 1 --- Chair --- 123.12

                        // 
                        // order ID --- customer ID --- Date --- Amount
                        // 1 --- 5 --- 11/1/17 --- 323.32
                        // 2 --- 1 --- 11/15/17 --- 13.99
                        //  3 --- 5 --- 12/21/2021 -- 10.00

                        // foreign key is the key of relation

                    // they are different types in DB
                // NoSQL (non relational database)
                    // most famous is MongoDB, but have relations
                    // they have dynamic schema (you have structured data and if something is not add with star)
                    // the schema can be changed
                // Data is stored in many ways
                    // can be column-oriented
                    // white column
                    // document oriented (Mongo DB) like JSON, graph based
                    // organized as key-value store (optimized for very fast storage) cache - which is temporary
                    // they are special for different use cases

                // Example: keys, phone, wallet
                    // 1. you just throw them somewhere and then you search them for like 15 mins (fast write and slow search)
                    // 2. you take more time to put them on position and then is easy to find (takes more time to write and fast search)
                    // depends of the purpose

                // Scalability
                    // to be able to work with growing demand
                    // base game in android store (flappy birds)
                    // SQL are vertically scalable (more performance to the server, CPU, RAM, SSD)
                    // NoSQL are horizontally scalable (can make a lot of servers working like one, is more reliable, plenty of servers which not need to be so fast)
                        // sharding (automatic horizontal scalable)

                        // fast write and performance with a lot of mistakes

                // SQL database
                    // MySQL
                    // Oracle - expensive
                    // PostgreSQL
                    // MicrosoftSQL - expensive

                // NoSQL database
                    // MongoDB - document oriented
                    // BigTable
                    // Redis - Key/Value pairs - write the data in the RAM (can't keep data forever), like cache, temporarily saved
                    // RavenDB

                    // old data is with slow access (like in facebook you can't choose to go back 10 years and see what you posted, the way you can do it is only by scrolling back to)

            // Database Engines
                // SQL server uses the Client-Server Model
                // Clients -> DBMS -> Engine -> Database
                // Clients -> Query -> Engine -> Access -> Database
                // Clients <- Data <- Engine <- Data <- Database

            // Server Architecture (binary)
                // Logical Storage
                    // Instance
                    // Database / Schema
                    // Table
                // Database Table Elements
                    // The table is the main building block in the relational databases
                        // Customer ID --- FirstName - BirthDate --- CityID
                        // 1 --- August --- 03/12/1975 --- 101
                        // 2 --- Benjamin --- 04/04/1984 --- 102
                        // 3 --- Denis --- 15/10/1988 --- 103
                        // 4 --- Linda --- 07/01/1984 --- 104
                    // Each row is called a record or entity
                    // Columns (fields) define the type of data they contain
                
                // DBMS (data base management system)
                // files are stored as files, in database you are assoc it to the place there are save
                // 1:42:00

                // SQL (Structured Query Language)
                    // SQL === programing language designed for managing data in a relational databse
                    // To communicate with the database Engine we use SQL
                    // MySQL / MariaDB
                        // Open-source relational database management system
                        // used in many large-scale websites
                            // Amazon
                            // Apple
                            // Facebook
                        // Works on many system platforms - Windows, maxOS, Linux

                // XAMPP - server
                    // Web server stack
                        // Apache + MariaDB + PHP + Perl
                // HeidiSQL - client to access database with
                    // Tool for managing MySQL, MSSQL and PostgreSQL
                    // Query / modify database
                    // Explore database objects
                // each table has to have colum ID (even first col have to be ID)
                // primary index is for ID Column

                // can make auto increment
                
                // SQL Commands
                    // we can communicate with the database engine
                    // queries provide greater control and flexibility
                    // to create a database in MySQL
                    // CREATE DATABASE employees;
                        // Table creation
                        // Inserting values
                        // update record, WHERE
                        // TRUNCATE TABLE people; (delete all records in the table)
                        // DROP TABLE people; (delete the data and the structure)
                        // DROP DATABASE employees; (Delete entire database)

                        // Both of these actions cannot be undone










