import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboard, faHome } from '@fortawesome/free-solid-svg-icons';

export function About() {
    return (
        <section className="w-full px-2 py-8 sm:py-11">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
                <article className='flex flex-col gap-4 items-start'>
                    <FontAwesomeIcon icon={faUsers} style={{fontSize: '32px'}}/>
                    <h2 className='font-bold text-xl'>Quem somos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</p>
                    <a href='#' className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>Saiba mais sobre a uber</a>
                </article>

                <article className='flex flex-col gap-4 items-start'>
                    <FontAwesomeIcon icon={faClipboard} style={{fontSize: '32px'}}/>
                    <h2 className='font-bold text-xl'>Newsroom</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</p>
                    <a href='#' className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>Acesse o newsroom</a>
                </article>

                <article className='flex flex-col gap-4 items-start'>
                    <FontAwesomeIcon icon={faHome} style={{fontSize: '32px'}}/>
                    <h2 className='font-bold text-xl'>Cidadania global</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</p>
                    <a href='#' className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>Veja nossos parceiros</a>
                </article>
            </div>
        </section>
    )
}

export default About;