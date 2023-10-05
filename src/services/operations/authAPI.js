import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";

const {
  LOGIN_API,
  SENDOTP_API,
  SIGNUP_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log(response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/dashboard/my-profile");
      toast.success(response.data.message);
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.response.data.message);
    }
  };
};

export const sendOtp = (email, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, { email });
      console.log(response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(response.data.message);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
  };
};

export const signUp = (
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      console.log("success response", response);

      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      navigate("/signup");
      console.log("error", error);
    }

    dispatch(setLoading(false));
  };
};

export const getPasswordResetToken = (email, setEmailSent) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(response.data.message);

      setEmailSent(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
  };
};

export const resetPassword = (password, confirmPassword, token,navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success(response.data.message);
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
  };
};
