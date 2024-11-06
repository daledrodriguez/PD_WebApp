function sendCodeSolution() {
    // Show loading screen
    document.getElementById('loading').style.display = 'flex';

    // After 2 seconds, start the typing effect
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none'; // Hide loading screen
        typeFeedback();
    }, 2000);
}

function typeFeedback() {
    const feedbackContent = document.getElementById('feedback-content');
    const feedbackText = `
        <p>Your solution correctly calculates the distances and checks if each pair of points is within range.</p>
        <p>However, consider using <code>math.hypot</code> for more concise distance calculations:</p>
        <pre><code class="language-python">math.hypot(x2 - x1, y2 - y1)</code></pre>
        <p>This will improve readability. Also, ensure you handle cases where all points might align in a straight line, as it may affect relay communication.</p>
    `;

    feedbackContent.innerHTML = ""; // Clear previous content

    let index = 0;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = feedbackText;

    function type() {
        if (index < tempDiv.children.length) {
            feedbackContent.appendChild(tempDiv.children[index].cloneNode(true));
            index++;
            setTimeout(type, 500); // Adjust typing delay between elements
        } else {
            Prism.highlightAllUnder(feedbackContent); // Apply syntax highlighting after all elements are typed
        }
    }

    type();
}

// Function to navigate to the feedback page with loading and transition
function navigateToFeedback() {
    // Start fade-out animation on the content
    document.querySelector('.content-container').classList.add('fade-out');
    
    // Show the loading screen after the content fade-out
    setTimeout(() => {
        document.getElementById('loading-screen').classList.remove('hidden');
    }, 500); // Wait for the fade-out transition

    // Redirect to feedback page after 2 seconds
    setTimeout(() => {
        window.location.href = "feedback.html";
    }, 2000); // Adjust the delay as needed
}
