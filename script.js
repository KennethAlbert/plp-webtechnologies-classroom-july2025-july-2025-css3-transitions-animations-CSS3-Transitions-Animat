document.addEventListener('DOMContentLoaded', () => {


    /**
     * This function demonstrates local scope. The variable 'localMessage' is only
     * accessible inside this function.
     */
    function showScopeExample() {
      const localMessage = "This message is inside the function's scope.";
      console.log(localMessage);
    }

    /**
     * This function takes two numbers as parameters and returns their sum.
     * @param {number} a The first number.
     * @param {number} b The second number.
     * @returns {number} The sum of the two numbers.
     */
    function addNumbers(a, b) {
      // 'result' is a variable with local scope
      const result = a + b;
      return result;
    }
    
    document.getElementById('calc-button').addEventListener('click', () => {
      const num1 = 15;
      const num2 = 7;
      const sum = addNumbers(num1, num2);
      console.log(`The result of adding ${num1} and ${num2} is: ${sum}`);
      
      // Try to access the local variable from the other function - this will fail.
      try {
          console.log(localMessage); 
      } catch (e) {
          console.error("Error: localMessage is not defined. This demonstrates function scope.");
      }
    });

    // --- Combining CSS Animations with JavaScript ---
    const triggerBtn = document.getElementById('trigger-animation-btn');
    const resetBtn = document.getElementById('reset-animation-btn');
    const dynamicBox = document.getElementById('dynamic-box');

    // Function to trigger the slide-in animation
    function triggerAnimation() {
      // Clear any existing animation classes
      dynamicBox.classList.remove('slide-out-animation');
      // Add the class that contains the CSS animation
      dynamicBox.classList.add('slide-in-animation');
    }

    // Function to trigger the slide-out animation
    function resetAnimation() {
      dynamicBox.classList.remove('slide-in-animation');
      dynamicBox.classList.add('slide-out-animation');
    }

    // Add event listeners to the buttons to call the functions
    triggerBtn.addEventListener('click', triggerAnimation);
    resetBtn.addEventListener('click', resetAnimation);
  });