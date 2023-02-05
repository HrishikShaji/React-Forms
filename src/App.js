import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmpassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      errorMessage:"Username should be 3-16 characters and shouldn't include special characters",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"invalid email",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"birthday",
      errorMessage:"",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"password should be 8-20 characters and should contain atleast 1 number and 1 special character",
      label:"Password",
      pattern:`/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;`,
      required:true
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"confirmpassword",
      errorMessage:"passwords do not match",
      label:"Confirm password",
      pattern:values.password,
      required:true
    },
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const onChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
    
  }
  
  

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
      
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
