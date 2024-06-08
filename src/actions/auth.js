import * as api from "../api";
//Action Creators
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });
    navigate("/");
    document.location.reload()
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });
    navigate("/");
    document.location.reload()
  } catch (error) {
    console.log(error);
  }
};
export const exist = (email) => async (dispatch) => {
  try {
    const data = (await api.exist(email)) !== null;

    dispatch({ type: "GET_USER", data });
  } catch (error) {
    console.log(error);
  }
};