import { RootState } from '@/store';
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { notebooks } from './notebooks.types';
import initialNotebooks from './intialNotebooks';

export type NotebooksState = {
	notebooks: notebooks[];
	selectedNotebookId?: notebooks['localId'] | null;
};

const initialState: NotebooksState = {
	notebooks: initialNotebooks,
	selectedNotebookId: undefined,
};

export const notebooksSlice = createSlice({
	name: 'notebooks',
	initialState,
	reducers: {
		addNotebook: (state, action: PayloadAction<notebooks[]>) => {},
		removeNotebook: (state, action: PayloadAction<notebooks[]>) => {},
		setNotebookTitle: (state, action: PayloadAction<notebooks>) => {
			const payloadId = action.payload;
			const existingContent = state.notebooks.find((content) => {
				return content.localId === payloadId.toString();
			});

			console.log(existingContent);
		},
		setNotebookContent: (state, action: PayloadAction<notebooks>) => {},
	},
});

// prettier-ignore
export const { addNotebook, removeNotebook, setNotebookContent, setNotebookTitle } = notebooksSlice.actions;

export const getSelectedNotebook = createSelector(
	(state: RootState) => state.notebooks,
	(notebooks) => {
		if (notebooks.selectedNotebookId) {
			return notebooks.notebooks.find(
				(notebook) => notebook.localId === notebooks.selectedNotebookId
			);
		}
		return null;
	}
);

export default notebooksSlice.reducer;
