import './App.css';
import useForm from './Hooks/useForm';
import bg3 from './images/bg3.jpg'

function App() {

  //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);


  return (
    <div className="App">
      <section>
        <div className='register'>
          <div className='col-1'>
            <h2>Sign in</h2>
            <span>Register and Enjoy the services</span>
      <form onSubmit={handleSubmit} id="form" className='flex flex-col'>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
      {
        errors.password && <h3>{errors.password}</h3>

      }
      <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <button type="submit" value="Submit" className="btn"> Sign in</button>
      </form>
      </div>
      <div className="col-2">
              <img src={bg3} alt="bg3" />
       </div>
      </div>
      </section>

    </div>
  );
}

export default App;