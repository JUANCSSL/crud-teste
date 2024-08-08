const Feedback = require('../models/feedbackModel');

exports.createFeedback = (req, res) => {
    const feedbackData = req.body;
    Feedback.create(feedbackData, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Feedback created...');
    });
};

exports.getAllFeedbacks = (req, res) => {
    Feedback.findAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.updateFeedback = (req, res) => {
    const feedbackId = req.params.id;
    const feedbackData = req.body;
    Feedback.update(feedbackId, feedbackData, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Feedback updated...');
    });
};

exports.deleteFeedback = (req, res) => {
    const feedbackId = req.params.id;
    Feedback.delete(feedbackId, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Feedback deleted...');
    });
};
