const regRouter = (app)=> {
    app.use('/tasks', require('./tasks'));
};

export default regRouter;
