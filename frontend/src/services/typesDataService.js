import http from "../http-common";

class typesDataService {
    getAll(){
        return http.get("/RAM_types");
    }

    get(id){
        return http.get(`/RAM_types/${id}`);
    }

}

export default new typesDataService();