import { useState } from "react";
export default function useRegister(){
    const [loading , setLoading] = useState(false)
    const [error,setError]= useState(false)
      const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
     
      const response = await fetch(
        "https://zyloo-api-v1.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
         
          body: JSON.stringify(formData),
        },
      );

      const datafromserver = await response.json();   

      console.log(datafromserver);
    } catch (error) {
      console.log(error);
      setError(true)
    }setLoading(trues)
  };
  if(loading){
    return("please wait")
  }
  if(error){
    return("request not found")
  }
    return{
        loading,
        error,
        login,
        formData,
        handleChange,
        handleSubmit

    }
}