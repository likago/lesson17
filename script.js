//1//
for (let i = 0; i <= 100; i++) {
	console.log(i);
  };

//2//
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
};

//3// 
 let users=["lika", "sandro", "ana", "nino", "nika"];
 users.unshift("salome");
 users.pop( );
 console.log (users);
 users.push("tako");
 users.shift( );
 console.log (users);

 //4// 
 let result = [];
 for (let i = 1; i <= 10000; i++) {
	result.push(i * i);
  };
console.log(result);

 //5// 
 let numbers= [1, 3, 5, 9, 7];
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
  };
  console.log(sum);

 //6// 
 function isOdd(number) {
	return number % 2 !== 0;
  };
  let number = 7;
  console.log(isOdd(number));
  
 //7// 
 function convertToLowerCase(uppercaseString) {
	return uppercaseString.toLowerCase();
  };
  let uppercaseString = "MY NAME IS JOHN";
  let lowercaseString = convertToLowerCase(uppercaseString);
  console.log(lowercaseString);