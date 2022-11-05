const router = require('express').Router()
let counter = 0;
const books = [
    {
        id: ++counter,
        name: 'Physics'
    },
    {
        id: ++counter,
        name: 'Chemistry'
    }, {
        id: ++counter,
        name: 'Maths'
    }
]

router.get('/', (req, res, next) => {
    res.json(books)
})

module.exports = router 