import React from 'react';
import image0 from '../../assets/google.png';
import image1 from '../../assets/mmicrosoft.png';
import image2 from '../../assets/alexa.png';
import image3 from '../../assets/Android.png';
import image4 from '../../assets/digitalocean.png';
import image5 from '../../assets/Gaana.png';
import image6 from '../../assets/github.png';
import image7 from '../../assets/intel.png';
import image8 from '../../assets/adobe.png';
import image9 from '../../assets/intuit.png';
import image10 from '../../assets/mapmyindia.jpg';
import image11 from '../../assets/meta.png';
import image12 from '../../assets/ntpc.png';
import image13 from '../../assets/paytm.png';
import image14 from '../../assets/polka.png';
import image15 from '../../assets/samsung.png';

function SponsorsSection() {
    return (
        <div className='container mx-auto my-5 pt-4 mt-12'>
            <div className="text-center mb-4">
                <h2 className="text-5xl font-bold text-purple-950 ">Our Partners</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-9 p-6 ">
                <img className='lazyloaded h-20' src={image0} alt="Google" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image1} alt="Microsoft" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image2} alt="Alexa" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image3} alt="Android" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image4} alt="Digital Ocean" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image5} alt="Gaana" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image6} alt="GitHub" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image7} alt="Intel" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image8} alt="Adobe" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image9} alt="Intuit" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image10} alt="MapMyIndia" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image11} alt="Meta" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image12} alt="NTPC" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image13} alt="Paytm" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image14} alt="Polka" width="190px" height="63px" />
                <img className='lazyloaded h-20' src={image15} alt="Polka" width="190px" height="63px" />
            </div>
        </div>
    );
}

export default SponsorsSection;
