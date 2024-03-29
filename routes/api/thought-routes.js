const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    createReaction,
    deleteReaction

} = require('../../controllers/thoughts-controllers');

// GET => /api/thoughts 
router.route('/').get(getAllThoughts);

// GET, PUT, DELETE => /api/thoughts/:id 
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// POST => /api/thoughts/:userId
router.route('/:userId').post(createThoughts);

// POST => /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE => /api/thoughts/:thoughtId/reactions/:reactionId 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;