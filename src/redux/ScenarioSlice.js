import { createSlice } from "@reduxjs/toolkit";

const ScenarioSlice = createSlice({
  name: "scenario",
  initialState: {
    ScenarioList: [],
    Scenarioid: {},
  },
  reducers: {
    addscenario: (state, action) => {
      const {scenarioname} = action.payload
      let length = state.ScenarioList.length
      state.ScenarioList.push({
        ...action.payload,
        scenarioid: state.ScenarioList.length + 1,
        vehicleList: [],
      });
      state.Scenarioid = { ...state.Scenarioid,
        [scenarioname] : length
    };
    },
    addvehicle : (state, action) =>{
        const id = state.Scenarioid[action.payload.scenarioname]
        state.ScenarioList[id].vehicleList.push(action.payload)
    }
  },
});

export const { addscenario, addvehicle} = ScenarioSlice.actions;
export default ScenarioSlice.reducer;
