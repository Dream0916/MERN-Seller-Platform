import { Dispatch } from "redux";
import axios from "axios";
import types from "./types";
import { CreditsActions } from "redux/types/credits";
import { AlertActions } from "redux/types/alert";
import { setAlert } from "./alert";

const URI = "http://localhost:5000/api/v1/credit";

// CREDIT ADD
export const addCredits =
  (body: any, setSubmitting: any) =>
  async (dispatch: Dispatch<CreditsActions | AlertActions>) => {
    const config: any = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(`${URI}/add`, body, config);
       dispatch({
            type: types.CREDIT_ADD_SUCCESS,
            payload: data,
          });
      dispatch<any>(
        setAlert({
          msg: "Add credits successful!",
          status: 200,
          alertType: "success",
        })
      );
      // dispatch<any>(loadUser());
    } catch (error: any) {
      dispatch({ type: types.CREDIT_ADD_FAIL });
      dispatch<any>(
        setAlert({
          msg: error.response.data,
          status: error.response.status,
          alertType: "error",
        })
      );
    } finally {
      setSubmitting(false);
    }
  };
