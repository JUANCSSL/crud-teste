const db = require('../database/db');

const Feedback = {
    create: (data, callback) => {
        const sql = 'INSERT INTO feedbacks (user_id, opportunity_id, rating, comment) VALUES (?, ?, ?, ?)';
        db.query(sql, [data.user_id, data.opportunity_id, data.rating, data.comment], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM feedbacks';
        db.query(sql, callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE feedbacks SET rating = ?, comment = ? WHERE id = ?';
        db.query(sql, [data.rating, data.comment, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM feedbacks WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Feedback;
