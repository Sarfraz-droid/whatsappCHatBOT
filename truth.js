var _ = require("lodash");

const fs = require('fs')

fs.readFile('truths.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const arr = data.split('\n');
  for(var i = 0;i<arr.length;i++)
  {
      let temp = _.split(arr[i],'.',2);

      if(temp.length > 1)
      {
          console.log(temp[1]);
      }
      
  }
})