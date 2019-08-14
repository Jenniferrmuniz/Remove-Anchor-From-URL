
function removeUrlAnchor(url){
  
  const index = lookForAnchor(url);
  if(index){
    url = url.slice(0,index);
  }
  return url;
}


function lookForAnchor(url){
  for(let i=0; i<url.length; i++){
    if(url[i] === "#"){
      return i;
    }
  }
  return null;
}

console.log(removeUrlAnchor('www.codewars.com/#about'));
