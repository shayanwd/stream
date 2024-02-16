import React, { useEffect, useState, useRef } from 'react';

const BookmarkBtn = () => {

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (userAgent.match(/Android/i)) {
            console.log('This is an Android device');
            // Perform actions for Android
        } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
            console.log('This is an iOS device');
            // Perform actions for iOS
        } else if (userAgent.match(/Windows/i)) {
            console.log('This is a Windows device');
            // Perform actions for Windows
        } else {
            console.log('This is another device');
            // Perform actions for other devices
        }
    }, []);

    const [showBook, setShowBook] = useState(false)

    const instructionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (instructionsRef.current && !instructionsRef.current.contains(event.target)) {
        setShowBook(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



    return (
        <div className='main-book-mark'>
            <div ref={instructionsRef} className={`book-instructions ${showBook? 'show-book': ''}`}>
                <ul>
                    <li>
                        <span>1</span>
                        Look for the <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 1.30902L8.94609 5.75963L9.00222 5.93237H9.18386H13.8635L10.0776 8.683L9.93064 8.78976L9.98677 8.96251L11.4329 13.4131L7.64695 10.6625L7.5 10.5557L7.35305 10.6625L3.56714 13.4131L5.01323 8.96251L5.06936 8.78976L4.92241 8.683L1.1365 5.93237H5.81614H5.99778L6.05391 5.75963L7.5 1.30902Z" stroke="white" stroke-width="0.5" />
                        </svg> or <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 12.8327C10.0139 12.8327 9.60069 12.6625 9.26042 12.3223C8.92014 11.982 8.75 11.5688 8.75 11.0827C8.75 11.0146 8.75486 10.944 8.76458 10.8709C8.7743 10.7978 8.78889 10.7323 8.80833 10.6743L4.69583 8.28268C4.53056 8.42852 4.34583 8.54285 4.14167 8.62568C3.9375 8.70852 3.72361 8.74974 3.5 8.74935C3.01389 8.74935 2.60069 8.57921 2.26042 8.23893C1.92014 7.89865 1.75 7.48546 1.75 6.99935C1.75 6.51324 1.92014 6.10004 2.26042 5.75977C2.60069 5.41949 3.01389 5.24935 3.5 5.24935C3.72361 5.24935 3.9375 5.29077 4.14167 5.3736C4.34583 5.45643 4.53056 5.57057 4.69583 5.71602L8.80833 3.32435C8.78889 3.26602 8.7743 3.20049 8.76458 3.12777C8.75486 3.05504 8.75 2.98446 8.75 2.91602C8.75 2.4299 8.92014 2.01671 9.26042 1.67643C9.60069 1.33615 10.0139 1.16602 10.5 1.16602C10.9861 1.16602 11.3993 1.33615 11.7396 1.67643C12.0799 2.01671 12.25 2.4299 12.25 2.91602C12.25 3.40213 12.0799 3.81532 11.7396 4.1556C11.3993 4.49588 10.9861 4.66602 10.5 4.66602C10.2764 4.66602 10.0625 4.62479 9.85833 4.54235C9.65417 4.4599 9.46944 4.34557 9.30417 4.19935L5.19167 6.59102C5.21111 6.64935 5.22569 6.71507 5.23542 6.78818C5.24514 6.86129 5.25 6.93168 5.25 6.99935C5.25 7.0674 5.24514 7.13799 5.23542 7.2111C5.22569 7.28421 5.21111 7.34974 5.19167 7.40768L9.30417 9.79935C9.46944 9.65352 9.65417 9.53938 9.85833 9.45693C10.0625 9.37449 10.2764 9.33307 10.5 9.33268C10.9861 9.33268 11.3993 9.50282 11.7396 9.8431C12.0799 10.1834 12.25 10.5966 12.25 11.0827C12.25 11.5688 12.0799 11.982 11.7396 12.3223C11.3993 12.6625 10.9861 12.8327 10.5 12.8327Z" fill="#00BDFF" />
                        </svg> <b>icon </b>near the top-right of your browser toolbar
                    </li>
                    <li>
                        <span>2</span>
                        <b>Tap</b> to add to bookmarks
                    </li>
                </ul>

                <span className='arrow-down'>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 13.5L15.7942 0H0.205771L8 13.5Z" fill="#D9D9D9" fill-opacity="0.12" />
                    </svg>

                </span>
            </div>
            <button onClick={()=>{
                setShowBook(!showBook)
            }} className={`site-btn bookmark-btn`} >
                <span>Bookmark for later <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.375 18.875V4.875C4.375 4.39375 4.5465 3.98192 4.8895 3.6395C5.2325 3.29708 5.64433 3.12558 6.125 3.125H14.875C15.3562 3.125 15.7684 3.2965 16.1114 3.6395C16.4544 3.9825 16.6256 4.39433 16.625 4.875V18.875L10.5 16.25L4.375 18.875Z" fill="white" />
                </svg>
                </span>
            </button>
        </div>
    )
}

export default BookmarkBtn
