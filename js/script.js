class SuperMath {
	check(obj) {
	  const { X, Y, znak } = obj;
	  
	  if (!this.isTrue(znak)) {
		 console.log(`Invalid operation: ${znak}`);
		 this.input();
		 return;
	  }
	  
	  if (!this.isNum(X) || !this.isNum(Y)) {
		 console.log("X and Y must be numeric values.");
		 this.input();
		 return;
	  }
	  
	  const result = this.calculate(X, Y, znak);
	  console.log(`Result: ${result}`);
	}
	
	input() {
	  const X = parseFloat(prompt("Enter X:"));
	  const Y = parseFloat(prompt("Enter Y:"));
	  const znak = prompt("Enter the operation (+, -, *, /, %):");
	  this.check({ X, Y, znak });
	}
	// проверить znak
	isTrue(znak) {
	  return ["+", "-", "*", "/", "%"].includes(znak);
	}
	// проверить число
	isNum(value) {
	  return !isNaN(parseFloat(value)) && isFinite(value);
	}
	
	calculate(X, Y, znak) {
	  switch (znak) {
		 case "+":
			return X + Y;
		 case "-":
			return X - Y;
		 case "*":
			return X * Y;
		 case "/":
			if (Y === 0) {
			  console.log("Division by zero is not allowed.");
			  this.input();
			  return;
			}
			return X / Y;
		 case "%":
			if (Y === 0) {
			  console.log("Division by zero is not allowed.");
			  this.input();
			  return;
			}
			return X % Y;
		 default:
			console.log(`Invalid operation: ${znak}`);
			this.input();
	  }
	}
 }
 
 const p = new SuperMath();
 p.check({ X: 12, Y: 3, znak: "/" }); // Result: 4
 
//  p.input();
 