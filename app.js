const github = new Github;

const ui = new UI;

// Search Input
const searchUser = document.querySelector("#searchUser").addEventListener("keyup", (e) => {
    // Get Input Text
    const userText = e.target.value;

    if (userText !== "") {
        // Make http call

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // show alert
                } else {
                    // show profile 
                    ui.showProfile(data.profile);
                }
            });
    } else {
        // clear profile

    }
});


