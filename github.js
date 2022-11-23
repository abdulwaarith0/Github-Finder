 class Github {
    constructor () {
        this.client_id = "Iv1.d05774d24b1573a1";
        this.client_secret = "+j1OgDlwcPoBFcVtCD+kmG3cSFMvu6z49PgvpueyOG0="
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
 }