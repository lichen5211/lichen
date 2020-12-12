var storage = {
        Setstorage(name,val){
          localStorage.setItem(name,JSON.stringify(val))
        },
        Getstorage(name){
          return JSON.parse(localStorage.getItem(name)) 
        },
        Remove(name){
          localStorage.removeItem(name)
        }
      }
      export default storage;