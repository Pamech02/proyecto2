import { setGoals, setTasks } from "./goals";

export const getTasks = () => {
  return async (dispatch) => {
      try {
          const resp = await fetch('http://localhost:3003/getTasks', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `12345-mi-apikey-secreta`
              }
          });

          const data = await resp.json();
          dispatch(setTasks(data));
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
};

export const getGoals = () => {
  return async (dispatch) => {
      try {
          const resp = await fetch('http://localhost:3003/getGoals', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `12345-mi-apikey-secreta`
              }
          });

          const data = await resp.json();
          dispatch(setGoals(data));
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
};