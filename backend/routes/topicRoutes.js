const express = require('express');
const router = express.Router();
const {
    getUserTopics,
    updateSubTopicStatus,
    getTopicsForProgress 
} = require('../controllers/topicController'); 
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getUserTopics);

router.patch('/:topicId/subtopics/:subTopicId', protect, updateSubTopicStatus);

router.get('/progress', protect, getTopicsForProgress);


module.exports = router;