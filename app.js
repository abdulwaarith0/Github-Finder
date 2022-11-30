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
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    // show profile 
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // clear profile
        ui.clearProfile();
    }
});


