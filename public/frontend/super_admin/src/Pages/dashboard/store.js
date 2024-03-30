import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setup from "./setup";
// import app_config from "../../../../config/app.config";

var store_prefix = setup.prefix;
var api_prefix = setup.api_prefix;

export const async_actions = {
   
    // all customer
    [`fetch_all_customer`]: createAsyncThunk(
        `${store_prefix}/fetch_all_customer`,
        async (data) => {

            let url = data?.url ? data.url : `/${store_prefix}/all-customer`;
            // console.log('url', url);
            const response = await axios.get(url);
            // console.log('response customer', response);
            return response.data.count;
        }
    ),
   
    // pending customer
    [`fetch_pending_customer`]: createAsyncThunk(
        `${store_prefix}/fetch_pending_customer`,
        async (data) => {

            let url = data?.url ? data.url : `/${store_prefix}/pending-customer`;
            // console.log('url', url);
            const response = await axios.get(url);
            // console.log('response pending customer', response);
            return response.data.count;
        }
    ),
   
    // interested customer
    [`fetch_interested_customer`]: createAsyncThunk(
        `${store_prefix}/fetch_interested_customer`,
        async (data) => {

            let url = data?.url ? data.url : `/${store_prefix}/interested-customer`;
            // console.log('url', url);
            const response = await axios.get(url);
            // console.log('response interested customer', response);
            return response.data.count;
        }
    ),
   
    // upcoming customer
    [`fetch_upcoming_customer`]: createAsyncThunk(
        `${store_prefix}/fetch_upcoming_customer`,
        async (data) => {

            let url = data?.url ? data.url : `/${store_prefix}/upcoming-contact-list`;
            // console.log('url', url);
            const response = await axios.get(url);
            // console.log('response upcoming customer', response);
            return response.data;
        }
    ),

    // store data
    [`store_${store_prefix}`]: createAsyncThunk(
        `user/store_${store_prefix}`,
        async (form_data, thunkAPI) => {
            console.log("some form data", form_data);
            try {
                const response = await axios.post(`/${api_prefix}/store`, form_data);
                // thunkAPI.dispatch(storeSlice.actions.my_action())
                // console.log(response.data);
                return response;
            } catch (error) {
                window.render_alert(error)
            }
        }
    ),

    // edit data or updated data
    [`edit_${store_prefix}`]: createAsyncThunk(
        `user/edit_${store_prefix}`,
        async (form_data, thunkAPI) => {
            console.log('hoiche');
            try {
                const response = await axios.post(`/${api_prefix}/update`, form_data);
                // thunkAPI.dispatch(storeSlice.actions.my_action())
                // console.log(response);
                return response;
            } catch (error) {
                // console.log(error);
                // console.log(error.response?.data?.data?.keyValue?.[key]);
                // console.log(error.response?.status);
                window.render_alert(error)

            }
        }
    ),
    // details data
    [`details_${store_prefix}`]: createAsyncThunk(
        `user/details_${store_prefix}`,
        async (id, thunkAPI) => {
            // console.log(thunkAPI);
            // console.log(id);
            try {
                const response = await axios.get(`/${api_prefix}/details/${id}`);
                // thunkAPI.dispatch(storeSlice.actions.my_action())
                // console.log(response);
                return response;
            } catch (error) {
                // console.log(error);
                // console.log(error.response?.data?.data?.keyValue?.[key]);
                // console.log(error.response?.status);
                return error;

            }
        }
    ),


    // copy ...
    // delete data
    [`delete_data`]: createAsyncThunk(
        `${store_prefix}/delete_data`,
        async (id, thunkAPI) => {
            // console.log('from user delete id',id);
            try {
                const response = await axios.post(`/${api_prefix}/delete`, { id });
                thunkAPI.dispatch(async_actions.fetch_all_data());
                // console.log('response from deltee', response);
                return response;
            } catch (error) {
                return error;
            }
        }
    ),

    // restore data
    [`restore_data`]: createAsyncThunk(
        `${store_prefix}/restore_data`,
        async (id, thunkAPI) => {
            try {
                const response = await axios.post(`/${api_prefix}/restore`, { id });
                thunkAPI.dispatch(async_actions.fetch_all_data());
                return response;
            } catch (error) {
                return error;
            }
        }
    ),


};

const storeSlice = createSlice({
    name: `${store_prefix}`,
    initialState: {
        data: {},
        customer: 0,
        pending_customer: 0,
        interested_customer: 0,
        upcoming_customer: {},

        singleData: {},

        page_limit: 10,
        search_key: '',
    },
    reducers: {
        set_page_limit: (state, { payload }) => {
            state.page_limit = payload
        },
        set_search_key: (state, { payload }) => {
            state.search_key = payload
        },
    },

    extraReducers: (builder) => {
        builder
            // .addCase(async_actions[`fetch_all_data`].fulfilled, (state, { type, payload, meta }) => {
            //     state[`data`] = payload;
            // })
            .addCase(async_actions[`fetch_all_customer`].fulfilled, (state, { type, payload, meta }) => {
                // console.log('payload cusotmer', payload);
                state[`customer`] = payload;
            })

            .addCase(async_actions[`fetch_pending_customer`].fulfilled, (state, { type, payload, meta }) => {
                // console.log('payload cusotmer', payload);
                state[`pending_customer`] = payload;
            })

            .addCase(async_actions[`fetch_interested_customer`].fulfilled, (state, { type, payload, meta }) => {
                // console.log('payload cusotmer', payload);
                state[`interested_customer`] = payload;
            })

            .addCase(async_actions[`fetch_upcoming_customer`].fulfilled, (state, { type, payload, meta }) => {
                // console.log('payload cusotmer', payload);
                state[`upcoming_customer`] = payload;
            })

            .addCase(async_actions[`details_${store_prefix}`].fulfilled, (state, { type, payload, meta }) => {
                // console.log('payload data', payload.data);
                state[`singleData`] = payload.data;
            })

    },
})

export default storeSlice;