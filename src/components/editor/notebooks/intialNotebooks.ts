import { v4 as uuidv4 } from 'uuid';

const initialNotebooks = [
	{
		localId: uuidv4(),
		title: 'Markdown example',
		content: '# Lorem Ipsum',
		isOpen: false,
	},
	{
		localId: uuidv4(),
		title: 'Welcome',
		content: 'Thank you for trying out my markdown effect',
		isOpen: false,
	},
];

export default initialNotebooks;
