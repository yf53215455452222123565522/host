import Phone from '../model/Phone';

async function UpdateUser(data,id) {
    try{
        const{phone}=data;
        const user=new Phone(phone);
        const response= await fetch("http://localhost:9000/users/"+id.toString(),{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
        });
        if(response.ok){
            const response = await response.json();
            return response;
        }
        else if(response.status===400){
            throw new Error("Bad request!");
        }
        else if (response.status === 404) {
            throw new Error("Not found");
          } else if (response.status === 500) {
            throw new Error("Internal server error");
          } else {
            throw new Error("Something went wrong");
          } 
        } catch (error) {
            throw error;
          }    
    
}

export default UpdateUser
