import axios from "./node_modules/axios";

export default {
    getposts:function(){
        return axios.get("/api/posts");
    },
    getpost: function(id) {
        return axios.get("/api/posts/" + id);
    },
    deletepost: function(id){
        return axios.delete("/api/posts/" + id);
    },
    savepost: function(bookData) {
        return axios.post("/api/posts", bookData);
    }
};