import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notebooks } from './notebooks.types';
import initialNotebooks from './intialNotebooks';

export type NotebooksState = {
	notebooks: notebooks[];
};

const initialState: NotebooksState = {
	notebooks: initialNotebooks,
};

export const notebooksSlice = createSlice({
	name: 'notebooks',
	initialState,
	reducers: {
		addNotebook: (state, action: PayloadAction<notebooks[]>) => {},
		removeNotebook: (state, action: PayloadAction<notebooks[]>) => {},
		isOpenNotebook: (state, action: PayloadAction<string>) => {
			const notebooks = state.notebooks;
			const foundNotebook = notebooks.find((notebook) => notebook.localId === action.payload);

			if (!foundNotebook) return;

			foundNotebook.isOpen = true;
		},
		setNotebookTitle: (state, action: PayloadAction<notebooks>) => {
			const payloadId = action.payload;
			const existingContent = state.notebooks.find((content) => {
				return content.localId === payloadId.toString();
			});
		},
		setNotebookContent: (state, action: PayloadAction<notebooks>) => {},
	},
});

// prettier-ignore
export const { addNotebook, removeNotebook, isOpenNotebook, setNotebookContent, setNotebookTitle } = notebooksSlice.actions;

export default notebooksSlice.reducer;
