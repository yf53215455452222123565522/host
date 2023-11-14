import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v1 as uuidv1 } from 'uuid';
import User from "../model/User";
import Address from "../model/Address";
import Phone from "../model/Phone";
import Login from "../model/Login";
export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:9000/users/" + id.toString()
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const loginWithCredentials=createAsyncThunk("users/loginWithCredentials",async(data)=>{
  try{

    const login=new Login(data.email,data.password);
    console.log(login);
    const response= await axios.post(
      "http://localhost:9000/auth/authenticate",
      JSON.stringify(login),
      {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':"*"
        },
      }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }


);
export const logoutWithCredentials=createAsyncThunk( "",async(data)=>{
  try{
  
    // console.log("Bearer "+data.access_token);
    // const response= await axios.post(
    //   "http://localhost:9000/auth/logout",null,
      
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization":"Bearer "+data.access_token
    //     },
    //   }
    //   );
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:9000/auth/logout',
      headers: { 
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+data.access_token,
        'Access-Control-Allow-Origin':"*",
        
      }
    };
    const response= await axios.request(config);
    
    
    
      console.log("done")
      return response.data;
    } catch (error) {
      console.log("not now!")
      throw new Error(error.message);
    }
  }
  
  );
  export const refreshToken=createAsyncThunk(
    "users/refreshToken",
    async(data)=>{
      try{
        let config = {
          method: 'post',
          url: 'http://localhost:9000/auth/refresh-token',
          headers: { 
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':"*",
            'Authorization': 'Bearer '+data.refresh_token,
            
          }
        };
        const response= await axios.request(config);
        
        
        
            return response.data;
    
        } catch (error) {
          console.log(error.message)
          throw new Error(error.message);
        }
      
    }
  
  );
export const addAddressToUser = createAsyncThunk(
  "users/addAddressToUser",
  async (data) => {
    try {
      const user = new Address(uuidv1(),data.quartier,data.province,data.ville);
      console.log(user)
      const response = await axios.post(
        "http://localhost:9000/users/" + data.id.toString(),
        JSON.stringify(user),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const avertirUser=createAsyncThunk(
  "users/avertirUser",
  async(id)=>{
    try{
      const response=await axios.put("http://localhost:9000/users/avertir/"+id.toString());
      return response.data
    }
    catch (error) {
      throw new Error(error.message);
    }
  }
)
export const blackListerUser=createAsyncThunk(
  "users/blackListerUser",
  async(id)=>{
    try{
      const response=await axios.put("http://localhost:9000/users/blackLister/"+id.toString());
      return response.data
    }
    catch (error) {
      throw new Error(error.message);
    }
  }
)
export const deleteAddressToUser=createAsyncThunk(
  "users/deleteAddressToUser",
  async(data)=>{
    try {
       const response = await axios.delete("http://localhost:9000/users/" + data.id.toString()+"/idAddress/"+data.idAddress.id.toString())
    return response.data;
    }
    catch (error) {
      throw new Error(error.message);
    }
   
  } 
);
export const updatePhoneUser = createAsyncThunk(
    "users/updatePhoneUser",
    async (data) => {
      try {
        const user = new Phone(data.phone);
        const response = await axios.patch(
          "http://localhost:9000/users/" + data.id.toString(),
          JSON.stringify(user),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );
  

  
export const addUser = createAsyncThunk("users/saveUser", async (data) => {
  const { id, name, email, picture, phoneNumber } = data;
  const user = new User(id, name, email, picture, phoneNumber);

  try {
    const response = await axios.post(
      "http://localhost:9000/users",
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.message === "Request failed with status code 409") {
      throw new Error(id);
    }
    throw new Error(error.message);
  }
});
export const LoginClientWithGoogle=createAsyncThunk(
  "users/LoginWithGoogle",async(data)=>{
  const { id, name, email, picture, phoneNumber } = data;
  const user = new User(id, name, email, picture, phoneNumber);

  try {
    const response = await axios.post(
      "http://localhost:9000/users/login",
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    return response.data;
  } catch (error) {
    
    throw new Error(error.message);
  }
}
)
export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    users:[],
    status: null,
    isLoggedIn: false,
    message: "",
    LogginError:'',
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.data = [];
      state.status = null;
      state.users=[];
      state.message = "";
      state.isLoggedIn = false;
    },
    clearMessage:(state)=>{
      state.message = "";
      state.status = null;
    }
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.message = "";
      state.data = action.payload;
      state.isLoggedIn = true;
      state.status = "success";
    },

    [fetchUser.pending]: (state) => {
      state.message = "";
      state.status = "loading";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";

      state.message = action.error.message;
    },
    [LoginClientWithGoogle.fulfilled]: (state, action) => {
      state.message = "";
      state.data = action.payload;
      state.isLoggedIn = true;
      state.status = "success";
    },
    [LoginClientWithGoogle.pending]: (state) => {
      state.message = "";
      state.status = "loading";
      
    },
  [LoginClientWithGoogle.rejected]: (state, action) => {
      state.status = "failed";
      state.LogginError=action.error.message;
      state.message = action.error.message;
    },
    [loginWithCredentials.fulfilled]: (state, action) => {
      state.message = "";
      state.data = action.payload;
      state.isLoggedIn = true;
      state.status = "success";
    },

    [loginWithCredentials.pending]: (state) => {
      state.message = "";
      state.status = "loading";
    },
    [loginWithCredentials.rejected]: (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
      state.LogginError=action.error.message;
    },
    [logoutWithCredentials.fulfilled]: (state, action) => {
      state.data = [];
      state.status = null;
      state.message = "";
      state.isLoggedIn = false;
    },

    [logoutWithCredentials.pending]: (state) => {
      state.message = "";
      state.status = "loading";
    },
    [logoutWithCredentials.rejected]: (state, action) => {
      state.status = "failed";
      state.LogginError=action.error.message;
      state.message = action.error.message;
    },

    [updatePhoneUser.fulfilled]: (state, action) => {
        state.message = "";
        state.data = action.payload;
        state.status = "success";
      },
  
    [updatePhoneUser.pending]: (state) => {
        state.status = "loading";
      },
    [updatePhoneUser.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
      [deleteAddressToUser.fulfilled]: (state, action) => {
        state.message = "";
        state.data = action.payload;
        state.status = "success";
      },
  
    [deleteAddressToUser.pending]: (state) => {
      state.message = "";
        state.status = "loading";
      },
    [deleteAddressToUser.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
      [refreshToken.fulfilled]: (state, action) => {
        state.message = "";
        state.data = action.payload;
        state.status = "success";
      },
  
    [refreshToken.pending]: (state) => {
      state.message = "";
        state.status = "loading";
      },
    [refreshToken.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
    [addAddressToUser.fulfilled]: (state, action) => {
        state.message = "";
        state.data = action.payload;
        state.status = "success";
      },
  
      [addAddressToUser.pending]: (state) => {
        state.message = "";
        state.status = "loading";
      },
      [addAddressToUser.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
    [addUser.fulfilled]: (state, action) => {
      state.message = "";
      state.data = action.payload;
      state.status = "success";
    },

    [addUser.pending]: (state) => {
      state.message = "";
      state.status = "loading";
    },
    [addUser.rejected]: (state, action) => {
      if (action.error.message !== "Request failed with status code 409") {
        state.status = "failed";
        state.message = action.error.message;
      } else {
        fetchUser(action.error.message);
      }
    },
  },
});
export const { logout,clearMessage } = userSlice.actions;
export default userSlice.reducer;