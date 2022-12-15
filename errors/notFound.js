const notFound = (req, res) => {
	return res.status(404).send('the route you are looking for does not exist');
};

export default notFound;
