class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
    };

    // Display Profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" />
                    <a href="${user.html_url}" target="_blank" class=" btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-2">
                    Public Repos: ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary m-2">
                    Public Gists: ${user.public_gists}
                    </span>
                    <span class="badge badge-primary m-2">
                    Followers: ${user.followers}
                    </span>
                    <span class="badge badge-secondary m-2">
                    Following: ${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item>Company: ${user.company}</li>
                         <li class="list-group-item>Website/Blog: ${user.blog}</li>
                          <li class="list-group-item>Location: ${user.location}</li>
                           <li class="list-group-item>Membership : ${user.created_at}</li>
                    </ul>
                </div>
                </div>
            </div>

            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id=
        `;
    };

    // Show Alert message
    showAlert(message, className) {
        // Clear alerts
        this.clearAlert();

        // create div element
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector(".searchContainer");
        // Get search box
        const search = document.querySelector(".search");
        // Insert alert
        container.insertBefore(div, search);

        //Timeout after three seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    };

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        };
    }


    // Clear profile
    clearProfile() {
        this.profile.innerHTML = "";
    }
};