import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const selectOptions = [
  { value: "student", label: "Student" },
  { value: "developer", label: "Developer" },
  { value: "manager", label: "Manager" }
];

const registerOptions = {
  // ...
  role: { required: "Role is required" }
};

export default function App() {

    const onSubmit = (data) => {
	  console.log(data);
          axios.post('https://formsubmit.co/aja/stolcml@gmail.com', data)
    .then(response => { alert('ozveme se'); 
    
  window.scrollTo(0, 0);
  reset()
})
   .catch(response=> {console.log(data); alert('neozveme se'); })
    

	}    
    const methods = useForm();
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
		    <div className="form-floating mb-3">
                    
                    <input className="form-control"
                        type="text" placeholder="Enter your name..."
                        {...register("name", { required: true})}
                    />
		    <label >Jméno a příjmení</label>
		    </div>
                </Form.Field>
		{errors.name && <p style={{color:"red"}}>Please check the First Name</p>}
                <Form.Field>
		    <div className="form-floating mb-3">                    
                    <input
                        className="form-control" id="email" type="email" placeholder="name@example.com"
                        {...register("email",{
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
		    <label>Email</label>
		    </div>
                </Form.Field>
		{errors.email && <p style={{color:"red"}}>Please check the Email</p>}
                <Form.Field>
		    <div className="form-floating mb-3">                    
                    <input
                        className="form-control" id="phone" type="phone" placeholder="(123) 456-7890"
                        {...register("phone")}
                    />
		    <label>Telefon</label>
		    </div>
                </Form.Field>
		<Form.Field>
		    <div className="form-floating mb-3">                    
                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}}
                        {...register("aboutMe")}
                    />
		    <label>O mně</label>
		    </div>
                </Form.Field>
		
		    <div className="form mb-3"> 
                    
		     <Controller
      name="role"
      control={control}
      defaultValue=""
      rules={registerOptions.role}
      render={({ field }) => (
        <Select options={selectOptions} {...field} label="Text field" />
      )}
    />

                    </div>
                
                
                <Button className="btn btn-primary btn-xl justify-center"  type="submit">Odeslat</Button>
                
            </Form>
        </div>
    )
}