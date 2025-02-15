function handlePageClick(event) {
  // Change background color
  document.body.style.backgroundColor = '#ffd6f4'; // Light pink, for example

  // Hide loading message
  document.getElementById('loadingMessage').style.display = 'none';

  // Show Valentine's proposal
  document.getElementById('mainPrompt').style.display = 'block';
}

// Add a click event listener to the body
document.body.addEventListener('click', handlePageClick);

function showMessage(response) {
  if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;

      // Set button position to absolute
      noButton.style.position = "absolute";

      // Change image source to "gun.gif"
      document.querySelector(".image").src = "https://i.pinimg.com/originals/ae/af/aa/aeafaa9c967204eb5e04af2a66708825.gif";

      // Generate random coordinates within the visible container
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      // Apply new coordinates to the button
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";

      // Update text content and hide name message
      document.getElementById("question").innerHTML =
          "Nice try, but you can't escape that easily😈! </p>🥺😢💔, </p>Did you mispress??";
      document.getElementById("name").style.display = "none";
      
  }

  if (response === "Yes") {
      // Remove name message and no button
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();

      // Update text content, show message, and change image source to "dance.gif"
      const yesMessage = document.getElementById("question");
      yesMessage.innerHTML= "LESGOOO!!! </p> 🎉🎊 </p>see you on the 14th babygirl😘🥰😍";
      document.querySelector(".image").src = "https://i.pinimg.com/originals/5a/27/71/5a2771ce1db5e81821746a3df134069b.gif";

      // Remove yes button
      document.getElementById("yesButton").remove();
  }
}

