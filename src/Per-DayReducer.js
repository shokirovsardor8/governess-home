import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./api/ApiCall/ApiCall";

const slice = createSlice({
    name: 'perDay',
    initialState: {
        perDay: [],
        result: {},
        error: {},


    },
    reducers: {
        getPerDayReducer: (state, action) => {
            state.perDay = action.payload
        },

        addPerDayReducer: (state, action) => {
            state.result = action.payload
        },

        getErrorPerDayReducer: (state, action) => {
            state.error = action.payload
        },

    }
})



function getToken() {
    return localStorage.getItem("Authorization");
}
function getRole() {
    return localStorage.getItem("role");
}

function getId() {
    return localStorage.getItem("id");
}


export const getPerDay = (data) => apiCall({
    url: "/out/api/perDay/get",
    method: "get",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    params: data,
    success: slice.actions.getPerDayReducer.type,
    error: slice.actions.getErrorPerDayReducer.type
})



export const addperDay = (data) => apiCall({
    url: "/out/api/multiMenu/addMenu",
    method: "post",
    // headers: {
    //     Authorization: getToken(),
    //     role: getRole(),
    //     id: getId(),
    // },
    data,
    success: slice.actions.addPerDayReducer.type,
    error: slice.actions.getErrorPerDayReducer.type
})


export const editperDay = (data, id) => apiCall({
    url: "/out/api/perDay/" + id,
    method: "patch",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    success: slice.actions.addPerDayReducer.type,
    error: slice.actions.getErrorPerDayReducer.type
})


export const changeStatus = (id) => apiCall({
    url: "/out/api/perDay/change/" + id,
    method: "put",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    success: slice.actions.addPerDayReducer.type,
    error: slice.actions.getErrorPerDayReducer.type
})


export const addperDay1 = (data, params) => apiCall({
    url: "/out/api/perDay",
    method: "post",
    headers: {
        Authorization: getToken(),
        role: getRole(),
        id: getId(),
    },
    data,
    params,
    success: slice.actions.addPerDayReducer.type,
    error: slice.actions.getErrorPerDayReducer.type
})


export default slice.reducer