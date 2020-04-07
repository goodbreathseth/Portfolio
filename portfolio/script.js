new Vue({
    el: '#homePage',
    data: {
        loaded: false,
        showWebsites: false,
        showGithub: false, 
        height: "height: 100%",
    },
    mounted() {
        this.loaded = true;
    },
    watch: {
        showGithub: function() {
            if (this.showGithub) {
                setTimeout(() => {
                    this.height = "height: " + document.documentElement.scrollHeight + "px"

                    setTimeout(() => {
                        document.getElementById("githubLinks").scrollIntoView({behavior: "smooth", block: "center"});
                    }, 100);
                }, 400);

            }
            else {
                this.height = "height: " + document.body.clientHeight + "px"
            }
        },
        showWebsites: function() {
            if (this.showWebsites) {
                setTimeout(() => {
                    this.height = "height: " + document.documentElement.scrollHeight + "px"

                    setTimeout(() => {
                        document.getElementById("websitePics").scrollIntoView({behavior: "smooth", block: "center"});
                    }, 100);
                }, 400);

            }
            else {
                this.height = "height: " + document.body.clientHeight + "px"
            }
        },
    },
    computed: {

    },
    methods: {
        goToSite(uri) {
            // console.log('uri', uri);
            // console.log('location.host', location.host);
            console.log(window.location.origin + uri);
            return window.location.origin + uri
        },
    }

})