//CHAPTER 21 - 25


//Task 01
// var firstName = prompt("Enter your first Name ")
// var lastName = prompt("Enter your Last Name ")
// alert("Hello "+ firstName +" "+ lastName)

//Task 02
// var mob = prompt("Your favourite smartPhone? ")
// document.write("My Favourite smart Phone is: "+ mob +"<br>"+"Length of string: "+ mob.length)

//Task 03
// var str = "Pakistani"
// document.write("String: "+ str +"<br> Index of 'n' : "+ str.indexOf('n'))

//Task 04
// var str = "Hello World"
// document.write("String: "+ str +"<br> Last index of 'l' : "+ str.lastIndexOf('l'))

//Task 05
// var str = "Pakistani"
// document.write("String: "+ str +"<br> Character at index 3 : "+ str.charAt(3))

//Task 06
// var firstName = prompt("Enter your first Name ")
// var lastName = prompt("Enter your Last Name ")
// alert("Hello ".concat(firstName, lastName))

//Task 07
// var str1 = "Hyderabad"
// var str2 = str1.slice(str1.indexOf('a')) //abad
// var str3 = str2.replace(str2, 'Islam')//Islam
// var str4 = str3.concat(str2)//Islamabad
// document.write("City: "+ str1 +"<br> After replacement: "+ str4)

//Task 08
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var str = message.replace(/and/g, '&') // "/and/g" shows the globa;l replacement with following text
// document.write(str)

//Task 09
// var str = "472"
// var num = Number(str)
// document.write("Value: "+ str +"<br>"+ "Type: "+typeof(str) +"<br>"+ "Value: "+ num +"<br>"+"Type: "+typeof(num))

//Task 10
// var str = prompt("Type dummy text in small letters & convert it into Capital ")
// var  str2 = str.toUpperCase()
// document.write("User input: "+ str +"<br>"+ "Upper Case: "+ str2)

//Task 11
// var str = prompt("Type string & convert it into Title Case ")
// var str2 = (str.slice(0, 1)).toUpperCase()
// var str3 = str2.concat(str.slice(1))
// document.write("User input: "+ str +"<br>"+ "Title Case: "+ str3)

//Task 12
// var num = 35.36 //first we convert this number in to string using toString otherwise they read as a number & not remove dot
// document.write("Number: "+ num +"<br>"+ "Result: "+ num.toString().replace('.',""))

//Task 13

//Task 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var itemName = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am? ")
// // var search = items.search(/itemName/i)

// for(var i=0; i<items.length; i++){
//     if(itemName == items[i]){
//         alert("Available")
//         break;
//     }
    
// }
// if(itemName != items[i]){
//     alert("Not available")
    
// }

//Task 15

//Task 16
// var str = "Pakistan Zindabad"
// var strSplit = str.split("")

// for(var i=0; i<str.length; i++){
//     document.write(strSplit[i] +"<br>")
// }

//Task 17
// var input = prompt("Enter dummy string ")
// document.write("User input: "+ input +"<br>")
// document.write("Last character of input: "+ input.charAt(input.length - 1))

//Task 18

//--------------------------------------------------------------------------------------------------------------


//CHAPTER 26 - 30


//Task 01
// var num = prompt("Enter positive float number ")
// document.write("number: "+ num +"<br>")
// document.write("round of value "+ Math.round(num) +"<br>")
// document.write("floor value "+ Math.floor(num) +"<br>")
// document.write("ceil value "+ Math.ceil(num))

//Task 02
// var num = prompt("Enter negative floating point number ")
// document.write("number: "+ num +"<br>")
// document.write("round of value "+ Math.round(num) +"<br>")
// document.write("floor value "+ Math.floor(num) +"<br>")
// document.write("ceil value "+ Math.ceil(num))

//Task 03
// var num = prompt("Conver negative integer into absolute value ")
// document.write("The absolute value of "+ num + " is "+ Math.abs(num))

//Task 04
// var num = Math.random(10)
// document.write("random dice value: "+ Math.round(num*6))

//Task 05
// var num = Math.random(2)
// var num2 = Math.ceil(num*2)
// if(num2 === 2){
//     document.write(num2 +"<br>" +"random coin value: Heads")
// }
// else if(num2 === 1){
//     document.write(num2 +"<br>" +"random coin value: Tails")

// }
// else{
//     document.write(num2 +"<br>" +"no option")

// }

//Task 06
// var num = Math.random()
// document.write("random number between 1 & 100: "+ Math.round(num*100))

//Task 07


//Task 08
// var num = Math.random()
// var num2 = prompt("find a secret number enter number between 1 to 10")
// var secNum = Math.round(num*10)

// if(secNum === num2){
//     alert("Congratulate!")
// }
// else{
//     alert("Try again")
// }

//-------------------------------------------------------------------------------------------------------------



//CHAPTER 31 - 34


//Task 01
// var date = new Date();
// document.write(date)

//Task 02
// var date = new Date();
// var str = date.toString()
// var str2 = str.indexOf("Jun")
// document.write("Current Month: "+ date)

// document.write("Current Month: "+ str2)

//Task 03
// var date = new Date();
// var num = date.toString()
// document.write("Today is "+ num.slice(0,3))

//Task 04
// var weekDays = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"]
// var day = new Date();
// var today = day.getDay()

// if(weekDays[today] === "Sat" || weekDays[today] === "Sun"){
//     alert("It's a fun day! ")
// }
// else{
//     alert("Boring")
// }


//Task 05
// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//Task 06
// var date = new Date();
// var milliSecond = date.getTime();
// var minute_s = (milliSecond / (1000 * 60))
// document.write("Current Date: ".bold()+ date +"<br>")
// document.write("Elapsed miliseconds since January 1, 1970: ".bold()+ milliSecond +"<br>")
// document.write("Elapsed minutes since January 1, 1970: ".bold()+ minute_s)

//Task 07
// var date = new Date();
// var hour = date.getHours();
// if(hour > 12){
//     alert("It's PM")
    
// }
// else{
//     alert("It's AM") 

// }

//Task 08
// var laterDate = new Date("Dec 31, 2020")
// alert("Later date: "+ laterDate)

//Task 09
// var currentDate = new Date();
// var ramdanDate = new Date("Apr 23, 2020");
// var diff = currentDate.getTime() - ramdanDate.getTime()

// var pastDays = Math.round(diff / (1000 * 60 * 60 * 24))
// alert(pastDays +" days have passed since 1st Ramadan, 2020")


//Task 10
// var currentDate = new Date();
// var refDate = new Date("Dec 05, 2015");
// var diff = currentDate.getTime() - refDate.getTime()

// var pastSec = Math.round(diff / (1000))
// document.write("On reference date "+ refDate +", "+ pastSec +" seconds had passed since begining of 2015")


//Task 11
// var hoursAhead = new Date();
// document.write("Current date: "+ hoursAhead +"<br>")
// hoursAhead.setHours(hoursAhead.getHours() - 1)
// document.write("1 hour ago it was: "+ hoursAhead +"<br>")

//Task 12
// var pastYear = new Date();
// document.write("Current date: "+ pastYear +"<br>")
// pastYear.setFullYear(pastYear.getFullYear()-100)
// document.write("100 years back, it was "+ pastYear)

// var pYear = new Date();
// document.write("Current date: "+ pYear +"<br>")
// pYear.setFullYear(pYear.getFullYear()-100);
// document.write("1 hour ago it was: "+ pYear +"<br>")

//Task 13
// var currentDate = new Date();
// var age = prompt("How are you old? ")
// var birthYear= currentDate.getFullYear()-age
// document.write("Your age is "+ age +"<br>")
// document.write("Your birth year is "+ birthYear)


//Task 14
// var date = new Date()
// var customerName = "ABC Customer"
// var currentMonth = date.getMonth()
// var units = 650
// var chargesPerUnit = 16
// var netAmmount = units * chargesPerUnit
// var surcharge = 350
// var grossAmmount = netAmmount + surcharge
// var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// document.write("<h1> K-Electeric Bill</h1>")
// document.write("Customer Name: "+ customerName.bold() +"<br>")
// document.write("Month: "+ month[currentMonth].bold() +"<br>")
// document.write("Number of Units: "+ units +"<br>")
// document.write("charges per unit: "+ chargesPerUnit +"<br> <br>")
// document.write("Net Amount Payable (within Due Date): "+ netAmmount +"<br>")
// document.write("Late payment surcharge: "+ surcharge +"<br>")
// document.write("Gross Amount Payable (after Due Date): "+ grossAmmount)

//------------------------------------------------------------------------------------------------------------


//CHAPTER 35 - 38


//Task 01
// function today(){
//     var date = new Date();
//     alert(date)
// }
// today();

//Task 02
// function greetUser(){
//     var fName = prompt("Enter your first name ")
//     var lName = prompt("Enter your last name ")
//     alert("Hello "+ fName +" "+ lName) 
// }
// greetUser()

//Task 03
// function sum(){
//     num1 = prompt("Enter first number ")
//     num2 = prompt("Enter second number ")
//     add = Number(num1) + Number(num2)
//     return alert("Sum of two numbers is "+ add)
// }
// sum()

//Task 04
// function add(){
//     var num1
//     var num2
//     var sum = Number(num1) + Number(num2)
//     alert("Sum of two numbers is "+ sum)
// }

// function sub(){
//     sum = Number(num1) - Number(num2)
//     return alert("Subtraction of two numbers is "+ sum)
// }

// function mul(){
//     sum = Number(num1) * Number(num2)
//     return alert("Multiplication of two numbers is "+ sum)
// }
// function div(){
//     sum = Number(num1) / Number(num2)
//     return alert("Division of two numbers is "+ sum)
// }

// function calculator(){

//     var num1 = prompt("Enter first Number ")
//     var num2 = prompt("Enter  second Number ")
//     num1 = Number(num1)
//     num2 = Number(num2)
    
//     var operator = prompt("Which operation do you perform? ")
//     if(operator === '+'){
//         sum = num1 + num2
//         alert("The sum of two number is "+ sum)
    
//     }
//     else if(operator === '-'){
//         sub = num1 - num2
//         alert("The sbtractoin of two number is "+ sub)
    
        
//     }
//     else if(operator === '*'){
//         mul = num1 * num2
//         alert("The multiplication of two number is "+ mul)
    
        
//     }
//     else if(operator === '/'){
//         div = num1 / num2
//         alert("The sbtractoin of two number is "+ div)
    
        
//     }
//     else{
//         alert("Invalid operator")
//     }
    
// }
// calculator()


//Task 05
// function number(num1){

//     var out = Math.pow(num1,2)
//     console.log(out)
// }
// number(5)


//Task 06
// function factorial(){
//     // var num = prompt("Enter a number to find factorial")
//     var fact = 1
//     var num = prompt("Enter a number to find the factorial ")

//     for(var i=1; i<=num; i++){
    
//         fact = fact * i
        
//     }
//     alert("The factorial of "+ num +" is "+ fact)
// }
// factorial()


//Task 07
// function count(){
//     var input = prompt("Enter a number that ends the counting ")
//     document.write("Counting".bold()+"<br>")
//     for(var i=0; i<=input; i++){
//         document.write(i +"<br>")
//     }
// }
// count()


//Task 08
// function pythagorous(){
//     function hypoteneuse(){
//         base = prompt("Enter base of a triangle ")
//         perpendicular = prompt("Enter perpendicular of a triangle ")
//         hyp = Math.pow(base, 2) + Math.pow(perpendicular, 2)
//     }
//     hypoteneuse()
//     hyp = Math.sqrt()
//     document.write("Hypoteneus is "+ hyp)
// }
// pythagorous()


//Task 09
// a)
// function area(width, height){
//     var Area = width * height
//     alert("The area of traingle is "+ Area)
// }
// area(25, 5)
// b)
// function area(width, height){
//     width = 25;
//     height = 5;
//     var Area = width * height
//     alert("The area of traingle is "+ Area)
// }
// area()


//Task 10


//Task 11


//Task 12


//Task 13



//Task 14
// var pi = 3.141592654
// document.write("The Geometrizer".bold()+"<br> <br>")
// function calcCircumference(rad){
//     var circumference = 2 * pi *rad
//     document.write("Circumference of circle is "+circumference+"<br> <br>")
// }

// function calcArea(rad){
//     var Area = pi * Math.pow(rad, 2)
//     document.write("Area of circle is "+Area)

// }

// calcCircumference(5)
// calcArea(5)







