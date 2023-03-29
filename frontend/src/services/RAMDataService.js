import http from "../http-common";

class RAMDataService {
    getAll(){
        return http.get("/ramList");
    }

    get(id){
        return http.get(`/ramList/${id}`);
    }

    create(data){
        return http.post("/ramList", data);
    }

    update(id, data){
        return http.put(`/ramList/${id}`, data);
    }

    delete(id){
        return http.delete(`/ramList/${id}`);
    }

    findByBrand(brand) {
        return http.get(`/ramList?brand=${brand}`);
    }
}

export default new RAMDataService();