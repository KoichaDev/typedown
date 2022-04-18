import { configureStore } from '@reduxjs/toolkit';
import notebooksReducer from '@/components/editor/notebooks/notebook-slice';

const store = configureStore({
	reducer: {
		notebooks: notebooksReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
