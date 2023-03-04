import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";


const selectOptions = [
  { value: "vse", label: "VŠE" },
  { value: "czu", label: "ČZU" },
  { value: "cvut", label: "ČVUT" },
  { value: "mffUk", label: "MFF UK"}
];


export default function App() {

    const onSubmit = (data) => {
	 console.log(data); 
          axios.post('https://formsubmit.co/ajax/stolcml@gmail.com', data)
    .then(response => { alert('Děkujeme! Brzy se vám ozveme!'); 
    
  window.scrollTo(0, 0);
  reset()
})
   .catch(response=> {alert('Je nám to líto! Něco se pokazilo! Zkuste to znovu.'); })
    

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
		    <label >Jméno a příjmení<span className="required">*</span></label>
		    </div>
                </Form.Field>
		{errors.name && <p style={{color:"red"}}>Pole Jméno a příjmení je požadováno</p>}
                <Form.Field>
		    <div className="form-floating mb-3">                    
                    <input
                        className="form-control" id="email" type="email" placeholder="name@example.com"
                        {...register("email",{
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
		    <label>Email<span className="required">*</span></label>
		    </div>
                </Form.Field>
		{errors.email && <p style={{color:"red"}}>Pole Email je požadováno</p>}
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
		
		    
                  {/* <Form.Field> 
                   <div className="form-floating mb-3"> 
		     <Controller
      name="choice"
      control={control}
      className="form-control"
      rules={{ required: true }} 
      render={({ field }) => (
        
        
        <Select id="sel" options={selectOptions} {...field} styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
        
    border: '1px solid grey',
    boxShadow: 'none',
    
    '&:hover':{border: '1px solid grey',},
    '&:active':{border: '1px solid red',},
    
      
    }),
  }} label="Single select" />
        
       
      )}
    />
    </div>
    </Form.Field>
{errors.choice && <p style={{color:"red"}}>Pole Vybrat školu je požadováno</p>}*/}

<Form.Field>
<div className="form mb-3">  
<select className="form-select" style={{fontSize:"1.4em"}}  {...register('choice', { required: true})}>
  <option value = "" disabled selected> Vybrat školu<span className="required">*</span></option>
  <option value="VŠE">VŠE</option>
  <option value="ČZU">ČZU</option>
  <option value="VŠCHT">VŠCHT</option>
  <option value="ČVUT">ČVUT</option>
  <option value="MFF UK">MFF UK</option>
</select>
</div>
</Form.Field>
  {errors.choice && <p style={{color:"red"}}>Pole Vybrat školu je požadováno</p>}       

<Form.Field>
<div className="form-floating mb-3"> 
	<p><input
              type="checkbox"
              name="selectCheckbox"
              id="selectCheckbox"
              {...register('checkBox', { required: true})}
              
            /> <label style={{color:"black"}}>Souhlasím s</label> <label><a data-bs-toggle="modal" href="#portfolioModal7">Zásady ochrany osobních údajů</a><span className="required" style={{color:"black"}}>*</span></label></p>

</div>
</Form.Field>
  {errors.checkBox && <p style={{color:"red"}}>Pole Souhlasím s Zásady ochrany osobních údajů je požadováno</p>}  

        
                
                
                <Button className="btn btn-primary btn-xl justify-center"  type="submit">Odeslat</Button>
                
            </Form>
        </div>
    )
}