'use strict'

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Ура')
    // reject()
  },5000)
})

promise.then((result)=>{
  console.log('Promise ended successfully', result)
}).catch((e)=> {
  console.log('Promise ended unsuccessfully')
}).finally(()=>{
  console.log('Promise ended')
})