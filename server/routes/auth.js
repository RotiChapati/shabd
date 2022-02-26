const Word = require('../models/Words')

const config = require('config')
const words = require('./words.json')
const express = require('express')
const { find } = require('../models/Words')
const router = express.Router()

const addWords = async () => {

  let w = words.words

  let i = 0
  w.map(async (word)=>{
    console.log(word)
    let wordBody = {
      "index": i,
      word
    }

    i += 1
    let stu = new Word(wordBody)
    await stu.save()
  })
}

router.get('/api/loadWords', async (req,res) => {
  try{
    addWords()
    res.status(200).send("Added words")  
  }
  catch(e){
    console.log(e)
  }
})

router.get('/api/checkWord/:w', async (req,res) => {
  try{
    let r = await Word.find({word:req.params.w})
    console.log(r)
    if (r.length) res.status(200).send("Found word")
    else res.status(200).send("Not found")  
  }
  catch(e){
    console.log(e)
  }
})


router.get('/api/getWord/:idx', async (req,res) => {
  try{
    let r = await Word.findOne({index: +req.params.idx})


    if (r) res.status(200).send(r.word)
    else res.status(200).send("Not found")  
  }
  catch(e){
    console.log(e)
  }
})



router.post('/api/signup', async (req, res) => {
  const { name, email, password, location, type } = req.body

  try {
    let user = null

    if (type === 'Customer') {
      user = await Customer.findOne({ email })

      if (user)
        res.status(400).send('Customer already exists')

      user = new Customer({ name, email, password, location, type })
    }

    if (type === 'Retailer') {
      user = await Retailer.findOne({ email })
      
      if (user)
        res.status(400).send('Retailer already exists')
      
      user = new Retailer({ name, email, password, location, type })
    }

    if (type === 'Wholesaler') {
      user = await Wholesaler.findOne({ email })
      if (user)
        res.status(400).send('Wholesaler already exists')
      
      user = new Wholesaler({ name, email, password, location, type })
    }

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    res.send(user)
    
  } catch (error) {
    if (error) console.log(error.data)
  }
})


module.exports = router
