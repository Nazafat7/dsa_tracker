const mongoose = require('mongoose');

const SubTopicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    leetCodeLink: { type: String, default: '#' },
    youTubeLink: { type: String, default: '#' },
    articleLink: { type: String, default: '#' },
    level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    status: { type: Boolean, default: false } // User's progress for this subtopic
}, { _id: true }); // Ensure _id is created for subtopics

const TopicSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true }, // e.g., "Algorithms", "Data Structures"
    description: { type: String, default: "Explore these exciting topics!" },
    subTopics: [SubTopicSchema]
}, { timestamps: true });

module.exports = mongoose.model('Topic', TopicSchema);