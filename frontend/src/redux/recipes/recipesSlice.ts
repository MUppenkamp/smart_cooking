import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// import {} from './actions';

const recipesAdapter = createEntityAdapter<TRecipeState>();

const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState: recipesAdapter.getInitialState(),
    reducers: {
        addedRecipe: recipesAdapter.addOne
    },
    extraReducers: (builder) => {

    }
});

// export const {} = recepiesSlice.actions;

export default recipesSlice.reducer;
