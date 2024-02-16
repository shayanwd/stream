import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';



const ShareModal = ({ closeModal }) => {

    const [copied, setCopied] = useState(false);


    const handleCopyLink = () => {
        // Implement copy to clipboard logic
        // For demonstration purposes, let's set copied to true immediately
        setCopied(true);

        // Reset copied state after 1 second
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };


    const handleEmail = () => {

        window.location.href = 'mailto:';
    };

    const handleMessage = () => {
        window.location.href = 'sms:';
    };
    return (
        <>
            <button onClick={closeModal} className='text-[12px] md:text-[18px] underline nunito text-center mx-auto w-fit mb-4 text-white z-50' type='button'>Cancel</button>
            <div className="share-options-holder">

                <CopyToClipboard text={window.location.href} onCopy={handleCopyLink} >

                    <div className="share-options-box">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33301 12.89C9.33301 11.9469 9.70766 11.0424 10.3745 10.3755C11.0414 9.70863 11.9459 9.33398 12.889 9.33398H24.4437C24.9107 9.33398 25.3731 9.42596 25.8045 9.60467C26.2359 9.78337 26.6279 10.0453 26.9581 10.3755C27.2883 10.7057 27.5503 11.0977 27.729 11.5292C27.9077 11.9606 27.9997 12.423 27.9997 12.89V24.4447C27.9997 24.9116 27.9077 25.374 27.729 25.8055C27.5503 26.2369 27.2883 26.6289 26.9581 26.9591C26.6279 27.2893 26.2359 27.5513 25.8045 27.73C25.3731 27.9087 24.9107 28.0006 24.4437 28.0006H12.889C12.422 28.0006 11.9596 27.9087 11.5282 27.73C11.0968 27.5513 10.7047 27.2893 10.3745 26.9591C10.0443 26.6289 9.7824 26.2369 9.60369 25.8055C9.42499 25.374 9.33301 24.9116 9.33301 24.4447V12.89Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.34933 22.316C4.94046 22.0829 4.60036 21.746 4.36343 21.3393C4.1265 20.9327 4.00113 20.4707 4 20V6.66667C4 5.2 5.2 4 6.66667 4H20C21 4 21.544 4.51333 22 5.33333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     
                        {copied ? 
                            <div className="copied-message">
                                <p>Link copied!</p>
                            </div>:
                             <p>Copy link</p>
                    }
                    </div>
                </CopyToClipboard>
                <div className="share-options-box" onClick={handleEmail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26.6667 6.66602H5.33333C4.59695 6.66602 4 7.26297 4 7.99935V23.9993C4 24.7357 4.59695 25.3327 5.33333 25.3327H26.6667C27.403 25.3327 28 24.7357 28 23.9993V7.99935C28 7.26297 27.403 6.66602 26.6667 6.66602Z" fill="#CA4242" />
                        <path d="M6 8.66602L16 15.9993L26 8.66602" stroke="black" stroke-linecap="round" />
                    </svg>
                    <p>Email</p>
                </div>
                <div className="share-options-box" onClick={handleMessage}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0003 14.6667V14V14.6667ZM21.3337 14.6667V14V14.6667ZM10.667 14.6667V14V14.6667ZM4.61899 22.4373C2.66699 20.876 2.66699 19.6947 2.66699 14.6667C2.66699 9.63867 2.66699 7.124 4.61899 5.56267C6.57366 4 9.71499 4 16.0003 4C22.2857 4 25.4283 4 27.3803 5.56267C29.3337 7.124 29.3337 9.63867 29.3337 14.6667C29.3337 19.6947 29.3337 20.876 27.3803 22.4373C25.4297 24 22.2857 24 16.0003 24C12.6537 24 10.9337 26.3173 8.00033 28V23.7173C6.54166 23.5 5.46833 23.1173 4.61899 22.4373Z" fill="#00BDFF" />
                        <path d="M16.0003 14.6667V14M21.3337 14.6667V14M10.667 14.6667V14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p>Message</p>
                </div>
            </div>
        </>
    )
}

export default ShareModal
