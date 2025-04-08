const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");

// Function to make an API call
async function makeApiCall(userId) {
  try {
    const response = await fetch(
      `https://0rs4px7xh1.execute-api.us-east-1.amazonaws.com/prod/users?userId=1`
    );
    if (!response.ok) {
      throw new Error("API call failed");
    }
    const data = await response.json();
    console.log("User data fetched:", data);
    // Handle the response, e.g., display the user data or redirect
    alert(`User Data: ${JSON.stringify(data)}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error fetching user data");
  }
}

signupBtn.onclick = function () {
  title.innerHTML = "Sign Up"; // Change title to "Sign Up"
  nameField.style.display = "block"; // Show the "Name" field
  signinBtn.value = "Sign Up"; // Change the button to "Sign Up"
};

signinBtn.onclick = function () {
  title.innerHTML = "Login"; // Change title to "Login"
  nameField.style.display = "none"; // Hide the "Name" field
  signinBtn.value = "Login"; // Change the button back to "Login"

  const userId = document.querySelector('input[type="email"]').value; // Get user email as userId (or change to any other identifier)

  if (userId) {
    makeApiCall(userId); // Make the API call
  } else {
    alert("Please provide a valid email.");
  }
};
