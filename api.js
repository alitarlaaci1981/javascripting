const url='https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane';
fetch(url)
.then(response=>{
  if(!response.ok){
    if (response.status === 500){
      throw new Error('Data not found')
    }else{
    throw new Error('server error')
  }
}
  return response.json();
})
.then(data=>{
  console.log(data);
})
.catch(error=>{
  console.error(error)
})


