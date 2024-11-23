import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function DownloadSection() {
    return (
        <section className="w-full px-2 py-8 sm:py-11 bg-gray-300">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
                <h2 className="font-bold text-2xl md:text-4xl">É mais facil pelo app</h2>

                <div className="flex flex-col w-full gap-5 md:flex-row">
                    <a href="#" className="flex w-full border-1 border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-200">
                        <div className='flex items-center'>
                            <img className="md:flex mr-4 w-1/3 hidden" src="src/assets/qrcode1.png"/>
                            <div>
                                <h3 className="font-bold text-xl">Baixe o app da uber</h3>
                                <span className="hidden md:block">Leia o codigo qr para baixar o app</span>
                            </div>
                        </div>
                        <FontAwesomeIcon className='hover:scale-110 duration-200' icon={faChevronRight} style={{fontSize: '24px'}}/>
                    </a>

                    <a href="#" className="flex w-full border-1 border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-200">
                        <div className='flex items-center'>
                            <img className="md:flex mr-4 w-1/3 hidden" src="src/assets/qrcode2.png"/>
                            <div>
                                <h3 className="font-bold text-xl">Baixe o app de parceiro</h3>
                                <span className="hidden md:block">Leia o codigo qr para baixar o app</span>
                            </div>
                        </div>
                        <FontAwesomeIcon className='hover:scale-110 duration-200' icon={faChevronRight} style={{fontSize: '24px'}}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default DownloadSection;