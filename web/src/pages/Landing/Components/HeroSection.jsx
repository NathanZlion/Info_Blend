
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/PrimaryButton'
import waveImg from '../assets/wave.svg'
import heroImg from  '../assets/hero.svg'

export default function HeroSection() {
    return (
      <section className="relative overflow-hidden py-[100px] px-[2rem]">
        <img
          src={waveImg}
          alt=""
          className="absolute bottom-0 left-0 right-0 w-100"
        />
        <div className="flex flex-col md:flex-row relative min-h-[70vh] items-center max-w-[1190px] m-auto">
          <div className="flex-1 flex flex-col gap-[2rem]">
            <p className="text-[#E87D0E] text-2xl font-bold">
              We seek the Truth
            </p>
            <h2 className="text-7xl font-bold ">BLEND · CONTRAST · INFORM</h2>
            <p className="">
              We let you compare and contrast news from different sources and
              perspectives. We don't tell you what is true or what is not. You
              decide.
            </p>
            <div>
              <Link to={"/signup"}>
                <PrimaryButton title={"Sign Up"} />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
    );
}