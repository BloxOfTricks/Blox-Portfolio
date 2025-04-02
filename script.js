// Function to send message from contact form
function sendMessage(event) {
    event.preventDefault(); // Prevent form refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let webhookURL = "https://discord.com/api/webhooks/1357037803502047528/91Dd58ML1U7hpTO3vjL0ZsOauqoEWZlrNjuiQ4puhppsKITif51kYMnfAXBWc39traL_"; // Replace with your webhook URL

        let embed = {
            embeds: [
                {
                    title: "📩 New Message from Portfolio Contact Form",
                    color: 3447003, // Blue color
                    fields: [
                        { name: "👤 Name", value: name, inline: true },
                        { name: "📧 Email", value: email, inline: true },
                        { name: "📝 Message", value: message }
                    ],
                    footer: {
                        text: "Sent from BloxOfTricks' Portfolio",
                        icon_url: "https://cdn-icons-png.flaticon.com/512/732/732200.png" // Example icon
                    },
                    timestamp: new Date()
                }
            ]
        };

        // Send data to Discord webhook
        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(embed)
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully to Discord!");
                document.querySelector("form").reset(); // Clear form
            } else {
                alert("Failed to send message to Discord.");
            }
        })
        .catch(error => {
            alert("Error sending message. Check the console.");
            console.error("Error:", error);
        });

    } else {
        alert("Please fill out all fields.");
    }
}

// Function to open a modal
function openModal(projectId) {
    // Close all modals first
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    // Open the selected modal
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Add event listeners to buttons that trigger the modals
document.getElementById("openProject1").addEventListener("click", function() {
    openModal('project1');
});

document.getElementById("openProject2").addEventListener("click", function() {
    openModal('project2');
});

document.getElementById("openProject3").addEventListener("click", function() {
    openModal('project3');
});