if(process.env.NODE_ENV==='production'){
  module.exports={
    mongoURI:'mongodb://nitin:12345@ds211309.mlab.com:11309/vidjot-produ'
  }
} else{
  module.exports={mongoURI:'mongodb://localhost/vidjot-dev'}
}