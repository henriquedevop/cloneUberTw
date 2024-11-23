import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function SignupSection() {
    return (
        <section className="w-full px-2 py-8 sm:py-11">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5">
                <a href="#" className="flex items-center w-full justify-between border-b-[1.5px] border-gray-950 py-6 hover:text-zinc-700 duration-200">
                    <h2 className='font-bold text-3xl max-w-xs lg:text-4xl'>Cadastre-se para dirigir</h2>
                    <FontAwesomeIcon icon={faArrowRight} style={{fontSize: '32px'}}/>
                </a>

                <a href="#" className="flex items-center w-full justify-between border-b-[1.5px] border-gray-950 py-6 hover:text-zinc-700 duration-200">
                    <h2 className='font-bold text-3xl max-w-xs lg:text-4xl'>Cadastre-se para viajar</h2>
                    <FontAwesomeIcon icon={faArrowRight} style={{fontSize: '32px'}}/>
                </a>
            </div>
        </section>
    )
}

export default SignupSection