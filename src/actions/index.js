import axios from 'axios';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';

export const InitCitySelectAsync = () => async (dispatch) => {
    try {
        const cityStorage = localStorage.getItem('city');
        if(!cityStorage){
            localStorage.setItem('city', 'milano');
        }
        let city = {};
        let api = "dcc02b17a97266519087ee9a06b94c53";
      // console.log(data);
      const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+cityStorage+"&appid="+api+"&lang=it&units=metric");
      // console.log(response);
      city = response.data;
      const response2 = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+cityStorage+"&appid="+api+"&lang=it&units=metric");
      // console.log(response);
      city.now = response2.data
      dispatch(Update(city));
    } catch (err) {
      throw new Error(err);
    }
};

export const InitCitys = () => async (dispatch) => {
    try {
        let citysStorage = localStorage.getItem('citys');
        if(!citysStorage){
            localStorage.setItem('citys', 'torino,catanzaro,milano,londra');
        }
        let api = "dcc02b17a97266519087ee9a06b94c53";
        let citysParams = localStorage.getItem('citys').split(",");
        let citys = [];
        for (let index = 0; index < citysParams.length; index++) {
            const element = citysParams[index];
            let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+element+"&appid="+api+"&lang=it&units=metric");
            citys.push(response.data);
        }
        dispatch(PushCity(citys));
    } catch (err) {
      throw new Error(err);
    }
};

export const UpdateCity = (cityParams) => async (dispatch) => {
    try {
        let cityStorage = localStorage.getItem('city');
        if(cityStorage && cityStorage != cityParams){
            localStorage.setItem('city', cityParams);
            let city = {};
            let api = "dcc02b17a97266519087ee9a06b94c53";
            // console.log(data);
            const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+cityParams+"&appid="+api+"&lang=it&units=metric");
            // console.log(response);
            city = response.data;
            const response2 = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+cityParams+"&appid="+api+"&lang=it&units=metric");
            // console.log(response);
            city.now = response2.data
            dispatch(Update(city));
        }
    } catch (err) {
      throw new Error(err);
    }
};

export const UpdateSearch = (search) => async (dispatch) => {
    try {
        dispatch(UpdateSearchStore(search));
    } catch (err) {
      throw new Error(err);
    }
};



export const UpdateCitySelect = (city) => async (dispatch) => {
    try {
        dispatch(UpdateCityselectStore(city));
    } catch (err) {
      throw new Error(err);
    }
};

export const ClickSearchMobile = (value) => async (dispatch) => {
    try {
        dispatch(UpdateClickSearchMobile(value));
    } catch (err) {
      throw new Error(err);
    }
};



export const UpdateLocation = (lat,long) => async (dispatch) => {
    try {
        let api = "dcc02b17a97266519087ee9a06b94c53";
        let city = {};
      // console.log(data);
      const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid="+api+"&lang=it&units=metric");
      // console.log(response);
      city = response.data;
      const response2 = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+api+"&lang=it&units=metric");
      // console.log(response);
      city.now = response2.data
      dispatch(Update(city));
    } catch (err) {
      throw new Error(err);
    }
};

const Update = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
        
}
const UpdateSearchStore = (data) => {
    return {
        type: "UPDATESEARCH",
        payload: data
    }
        
}

const UpdateCityselectStore = (data) => {
    return {
        type: "UPDATECITYSELECT",
        payload: data
    }
        
}

const UpdateClickSearchMobile = (data) => {
    return {
        type: "UPDATECLIKSEARCHMOBILE",
        payload: data
    }
        
}


export const PushCity = (data) => {
    return {
        type: "INITCITYS",
        payload: data
    }
        
}

