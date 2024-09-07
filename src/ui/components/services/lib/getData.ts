import fsPromises from 'fs/promises';
import path from 'path';

const getData = async () => {
	try {
		const filePath = path.join(process.cwd(), 'data/cardData.json');
		const jsonData = await fsPromises.readFile(filePath, 'utf-8');

		return JSON.parse(jsonData);
	} catch (error) {
		console.error('Error reading or parsing the file:', error);
	}
};

export { getData };
