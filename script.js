// Function to send message from contact form
function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let webhookURL = "https://discord.com/api/webhooks/1357037803502047528/91Dd58ML1U7hpTO3vjL0ZsOauqoEWZlrNjuiQ4puhppsKITif51kYMnfAXBWc39traL_";

        let embed = {
            embeds: [
                {
                    title: "📩 New Message from Portfolio Contact Form",
                    color: 3447003,
                    fields: [
                        { name: "👤 Name", value: name, inline: true },
                        { name: "📧 Email", value: email, inline: true },
                        { name: "📝 Message", value: message }
                    ],
                    footer: {
                        text: "Sent from BloxOfTricks' Portfolio",
                        icon_url: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    },
                    timestamp: new Date()
                }
            ]
        };

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
                document.querySelector("form").reset();
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
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

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

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
