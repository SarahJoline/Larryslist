import axios from "axios";

export default {
    getposts: function () {
        return axios.get("/api/allPosts");
    },
    getpost: function (id) {
        return axios.get("/api/posts/" + id);
    },
    deletepost: function (id) {
        return axios.delete("/api/posts/" + id);
    },
    savepost: function (postData) {
        return axios.post("/api/allPosts", postData);
    }
};