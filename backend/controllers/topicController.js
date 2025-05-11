const Topic = require('../models/Topic');
const User = require('../models/User'); 

const getUserTopics = async (req, res) => {
    try {
        const topics = await Topic.find({ user: req.user._id }).sort({ createdAt: 'asc' });
        res.json(topics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error fetching topics' });
    }
};


const updateSubTopicStatus = async (req, res) => {
    const { topicId, subTopicId } = req.params;
    const { status } = req.body; 

    if (typeof status !== 'boolean') {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    try {
        const topic = await Topic.findOne({ _id: topicId, user: req.user._id });

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found or not owned by user' });
        }

        const subTopic = topic.subTopics.id(subTopicId); 
        if (!subTopic) {
            return res.status(404).json({ message: 'Sub-topic not found' });
        }

        subTopic.status = status;
        await topic.save();

        res.json({ message: 'Sub-topic status updated successfully', topic });
    } catch (error) {
        console.error(error);
        if (error.kind === 'ObjectId') {
             return res.status(404).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: 'Server Error updating sub-topic status' });
    }
};


/
const getTopicsForProgress = async (req, res) => {
    try {
        const topics = await Topic.find({ user: req.user._id }).select('subTopics'); // Only select subTopics field

        if (!topics || topics.length === 0) {
            return res.json([]); 
        }

        
        const allSubTopics = topics.reduce((acc, topic) => {
            if (topic.subTopics && topic.subTopics.length > 0) {
                const subTopicsWithDetails = topic.subTopics.map(st => ({
                    _id: st._id,
                    name: st.name,
                    level: st.level,
                    status: st.status
                }));
                return acc.concat(subTopicsWithDetails);
            }
            return acc;
        }, []);

        res.json(allSubTopics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error fetching progress data' });
    }
};


module.exports = {
    getUserTopics,
    updateSubTopicStatus,
    getTopicsForProgress
};