import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white mx-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M21,3H3A3,3,0,0,0,0,6V18a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6A3,3,0,0,0,21,3ZM8.258,18H5.051V9.712h3.207ZM6.654,8.148H6.633a1.56,1.56,0,0,1-.1-3.117h.05a1.56,1.56,0,1,1,.1,3.117Zm13.6,9.852h-3.206V13.911c0-.861-.018-1.969-1.2-1.969-1.2,0-1.386,1.252-1.386,2.543v3.665H10.2V9.712h3.056v1.354h.043a3.2,3.2,0,0,1,2.9-1.591c3.1,0,3.674,2.046,3.674,4.715v5.956Z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white mx-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M18,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3Zm-.2,8.1H16.114v2.4h1.687v6.3H14.2v-6.3h-1.5V11.1h1.5V9.9c0-1.55.841-2.475,2.536-2.475h1.726v2.4h-1.024c-.664,0-.781.264-.781.813v1.1h1.806Z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
