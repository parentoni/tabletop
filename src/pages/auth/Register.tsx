import { Base } from "../../shared/BasePage"
import { Eye, EyeOff, Info, MoveLeft } from "lucide-react";
import reducedLogo from '../../assets/logo-transparent.jpg';
import { Register } from "../../shared/register";
import {createUserWithEmailAndPassword, updateProfile, User} from "firebase/auth";


import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "../../shared/register/Form";
import { firstPageSubmit } from "../../shared/register/functions/firstPageSubmit";
import { auth } from "../..";

export const RegisterPage = () => {
  
  const navigate = useNavigate()
  const routerLocation = useLocation()

  const [page, setPage] = useState<number>(0)

  const [showFirstPassword, setShowFirstPassword] = useState<boolean>(false)
  const [showSecondPassword, setShowSecondPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const usernameRef = useRef<HTMLInputElement>(null)


  const [form, setForm] = useState<Form>(
    {
      'display_name': {
        variable: '',
        regExp: /.+/gm,
        errorMessage: 'Please select a valid name.'
      },

      "email" : {
        variable: '',
        regExp: /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm,
        errorMessage: "Please select a valid email"
      },

      "password": {
        variable: '',
        regExp: /.{6,}/g,
        errorMessage: "Please provide a valid password. Minimum 6 characters."
      },

      "confirm_password": {
        variable:'',
        regExp: /.{6,}/g,
        errorMessage: "Please provide a valid password."
      }, 

      }
    )

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result: boolean = firstPageSubmit(form, setForm)
    if (result) {
      try{
        await createUserWithEmailAndPassword(auth, form["email"].variable, form["password"].variable)
        updateProfile(auth.currentUser as User, {displayName: form["display_name"].variable})

        navigate("/home")
      } catch (err) {
        alert("Something went wrong"); console.log(err);
      }
    }
    setLoading(false)
  }

  return (
  <div className="w-screen h-screen">
    <Base>
      <div className="flex  justify-center ">
        <div className=" max-w-lg w-full lg:mt-24">
          <div className="flex justify-between mb-3">
            <button className="" onClick={() => page === 0?(routerLocation.key !== 'default'?navigate(-1): navigate('/')) : setPage(page - 1)}>
              <MoveLeft />
            </button>
            <button onClick={() => navigate('/')} className="">
              <img className=" h-12" alt="MatchPet" src={reducedLogo}></img>
            </button>
        </div>
          <Register.Root page={page} setPage={setPage} pages={1} form={form} setForm={setForm} onSubmit={onSubmit} loading={loading}>

          <Register.Title page={0} title="Register"/> 

          <Register.Step page={0}>
            <Register.TextInput
              formName="display_name"
              type={'text'}
              title="Name"
              placeholder="John Doe" 
            />
            <Register.TextInput type={'email'} title="Email" placeholder="name@provider.com" formName="email"/>
            <Register.TextInput 
              formName="password"
              type={showFirstPassword ?"text":"password"}
              inputMode={'text'}
              title="Password"
              placeholder="•••••••••"
              tooltip={
                <Register.Tooltip 
                  onClick={() => setShowFirstPassword(!showFirstPassword)} 
                  interior={showFirstPassword?<EyeOff size={24} color="#fff"/>:<Eye size={24} color="#fff"/>}
                />
              }
              />

            <Register.TextInput 
              formName="confirm_password"
              type={showSecondPassword ?"text":"password"}
              inputMode={'text'}
              title="Repeat your password"
              placeholder="•••••••••"
              tooltip={
                <Register.Tooltip 
                  onClick={() => setShowSecondPassword(!showSecondPassword)} 
                  interior={showSecondPassword?<EyeOff size={24} color="#fff"/>:<Eye size={24} color="#fff"/>}
                />
              }
              />

          </Register.Step>
          <Register.Button />
          </Register.Root>

        </div>
      </div>
    </Base>
  </div>
  )
}
