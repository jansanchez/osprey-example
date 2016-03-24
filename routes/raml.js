var osprey = require('osprey');
var router = osprey.Router();

router.get('/attendees', function(req, res) {
    res.json({ "name": "leo" });
});

router.post('/attendees', function(req, res) {
    res.json(req.body);
});

router.get('/events/{eventId}', function(req, res) {
    res.json({ "name": req.params.eventId });
});

module.exports = router;
