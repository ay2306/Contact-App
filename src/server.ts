import app from './app';
const port = process.env.PORT || 8080;
app.listen(port,(err)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is listening to ${port}`);
    }
})