export default function EcomSDK() {

    this._baseurl = "https://communicationsystem.mkdlabs.com";
    this._project_id = "communicationsystem";
    this._secret = "3o655gx0jr5h94z7osw928yskhmu9wjo";
    this._table = "";
  
    const raw = this._project_id + ":" + this._secret;
    let base64Encode = btoa(raw);
  
    this.getHeader = function () {
      return {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "x-project": base64Encode
      };
    };
  
    this.baseUrl = function () {
      return this._baseurl;
    };

    this.getCart = async function () {
      const authorized = localStorage.getItem("token")
      if(authorized){
        const result = await fetch(this._baseurl + "/v2/api/lambda/ecom/cart", {
            method: "get",
            headers: this.getHeader(),
            });
        const json = await result.json();
        
        if (result.status === 401) {
            throw new Error(json.message);
        }
    
        if (result.status === 403) {
            throw new Error(json.message);
        }

        return result.list;
      }else{
        const cart = localStorage.getItem("cart")
        return cart;
      }
    }
    this.products = async function(method,payload){

      switch(method){
        case "get":
          const resultget = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/"+payload.id, {
            method: "get",
            headers: this.getHeader(),
            });
            const jsonget = await resultget.json();
            
            if (jsonget.status === 401) {
                throw new Error(json.message);
            }
        
            if (jsonget.status === 403) {
                throw new Error(json.message);
            }

          return jsonget.list;
        case "getall":
          const resultgetall = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsongetall = await resultgetall.json();
        
        if (jsongetall.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsongetall.status === 403) {
            throw new Error(json.message);
        }

        return jsongetall.list;
        case "post":
          const resultpost = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsonpost = await resultpost.json();
        
        if (jsonpost.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsonpost.status === 403) {
            throw new Error(json.message);
        }

        return jsonpost.list;
        case "put":
          const resultput = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsonput = await resultput.json();
        
        if (jsonput.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsonput.status === 403) {
            throw new Error(json.message);
        }

        return jsonput.list;
        case "delete":
          const resultdelete = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsondelete = await resultdelete.json();
        
        if (jsondelete.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsondelete.status === 403) {
            throw new Error(json.message);
        }

        return jsondelete.list;
        break
        case "deleteall":
          const resultdeleteall = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsondeleteall = await resultdeleteall.json();
        
        if (jsondeleteall.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsondeleteall.status === 403) {
            throw new Error(json.message);
        }

        return jsondeleteall.list;
          break;
      }

    }
    this.reviews = async function(method){

      switch(method){
        case "get":
          const resultget = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review", {
            method: "get",
            headers: this.getHeader(),
            });
            const jsonget = await resultget.json();
            
            if (jsonget.status === 401) {
                throw new Error(json.message);
            }
        
            if (jsonget.status === 403) {
                throw new Error(json.message);
            }

          return jsonget.list;
        case "getall":
          const resultgetall = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsongetall = await resultgetall.json();
        
        if (jsongetall.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsongetall.status === 403) {
            throw new Error(json.message);
        }

        return jsongetall.list;
        case "post":
          const resultpost = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsonpost = await resultpost.json();
        
        if (jsonpost.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsonpost.status === 403) {
            throw new Error(json.message);
        }

        return jsonpost.list;
        case "put":
          const resultput = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsonput = await resultput.json();
        
        if (jsonput.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsonput.status === 403) {
            throw new Error(json.message);
        }

        return jsonput.list;
        case "delete":
          const resultdelete = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review/", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsondelete = await resultdelete.json();
        
        if (jsondelete.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsondelete.status === 403) {
            throw new Error(json.message);
        }

        return jsondelete.list;
        break
        case "deleteall":
          const resultdeleteall = await fetch(this._baseurl + "/v2/api/lambda/ecom/product/review", {
            method: "get",
            headers: this.getHeader(),
            });
        const jsondeleteall = await resultdeleteall.json();
        
        if (jsondeleteall.status === 401) {
            throw new Error(json.message);
        }
    
        if (jsondeleteall.status === 403) {
            throw new Error(json.message);
        }

        return jsondeleteall.list;
          break;
      }

    }
    // this.notes
    // this.coupons
    // this.getcountry
    // this.getcity
    // this.getstate
    // this.getsettings
    // this.checkout
    // this.categories
    // this.filter
    // this.search
    // this.getAbandonCart
    
}