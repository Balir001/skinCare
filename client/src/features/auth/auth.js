import {createSlice} from "@reducjs/toolkit"
import { createAsyncThunk, current } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState= {
    currentUser:undefined,
    isLoading:false,
};

export const register = createAsyncThunk('auth/register',async (userData,thunkAPI)=>{
    try{

        const response= await axios.post("http://api.realworld.io./api/user",{user:userData,})
        return response.data.user

    }catch(err){

        return thunkAPI.rejectWithValue(err.responce.data.errors)

    }
})

export const login = createAsyncThunk('auth/login',async (userData,thunkAPI)=>{
    try{

        const response= await axios.post("http://api.realworld.io./api/user/login",{user:userData,})
        return response.data.user

    }catch(err){

        return thunkAPI.rejectWithValue(err.responce.data.errors)

    }
})

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser',async (_,thunkAPI)=>{
    try{
        const token= localStorage.getItem('accessToken')??''

        const response= await axios.get("http://api.realworld.io./api/user",{
        headers:{
            Authorization:`Token ${token}`,
        }
        })
        return response.data.user

    }catch(err){

        return thunkAPI.rejectWithValue(err.responce.data.errors)

    }
})

export const logout = createAsyncThunk('auth/logout',async ()=>{
    localStorage.removeItem("accessToken")
}
)

const authSlice= createSlice({
    name:"auth",
    initialState,
    extrareducers:(builder) =>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(register.fullfilled,(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload
        })
        .addCase(register.rejected,(state)=>{
            state.isLoading=false;
           
        })

        .addCase(login.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(login.fullfilled,(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload
        })
        .addCase(login.rejected,(state)=>{
            state.isLoading=false;
           
        })

        .addCase(getCurrentUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getCurrentUser.fullfilled,(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload
        })
        .addCase(getCurrentUser.rejected,(state)=>{
            state.isLoading=false;
            state.currentUser = null
        })

        .addCase(logout.fullfilled,(state)=>{
            state.isLoading=false;
            state.currentUser = null
        })
    },

    
})

export default authSlice.reducer