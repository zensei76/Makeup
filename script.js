//const url = 'http://makeup-api.herokuapp.com/api/v1/products.json';


async function start() {
    try {
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
      let data = await response.json();
      createBrandList(data)
      let arr=[];        
          
    } catch (error) {
      console.log("There was a problem fetching list.")
      console.log(error);
    }
  }
  
  start()

  function createBrandList(brandList) {
      Object.entries(brandList).forEach((key, val) => {
        if (key === "brand") {
            document.getElementById("brand").innerHTML = `
            
             <option>Choose Brand</option>
             ${Object.keys(brandList).map(function(brand) {
            return `<option>${brand}</option>`
          }).join('')}
        </select>
    `
            
        }
        
    }
  };
  

  

  