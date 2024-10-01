import { myAxios } from "./helper"

export const register=(user)=>{
    return myAxios
    .post("/api/user/create",user)
    .then((response) => response.data);
}

export const userLogin=(loginDetail)=>{
    return myAxios
    .post("/api/user/login",loginDetail)
    .then((response) => response.data);
}

export const addStudent=(student)=>{
    return myAxios
    .post("/api/student/create",student)
    .then((response) => response.data);
}

export const getCourses=()=>{
    return myAxios
    .get("/api/course")
    .then((response) => response.data);
}