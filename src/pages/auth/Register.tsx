import { Base } from "../../shared/BasePage"
import { Eye, EyeOff, Info, MoveLeft } from "lucide-react";
import reducedLogo from '../../assets/logo-transparent.jpg';
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";

export const Register = () => {
  
  const navigate = useNavigate()
  const routerLocation = useLocation()

  const [page, setPage] = useState<number>(0)

  const [showFirstPassword, setShowFirstPassword] = useState<boolean>(false)
  const [showSecondPassword, setShowSecondPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const usernameRef = useRef<HTMLInputElement>(null)

  return (
  <div className="w-screen h-screen">
    <Base>
      <div className="flex  justify-center ">
        <div className=" max-w-lg w-full bg-white lg:mt-24">
          <div className="flex justify-between mb-3">
            <button className="" onClick={() => page === 0?(routerLocation.key !== 'default'?navigate(-1): navigate('/')) : setPage(page - 1)}>
              <MoveLeft />
            </button>
            <button onClick={() => navigate('/')} className="">
              <img className=" h-6" alt="MatchPet" src={reducedLogo}></img>
            </button>
        </div>
        </div>
      </div>
    </Base>
  </div>
  )
}
