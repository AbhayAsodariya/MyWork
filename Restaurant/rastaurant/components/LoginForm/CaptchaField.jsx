import React, { useState } from "react";

function CaptchaField({ value, onChange }) {
  const [captchaImage, setCaptchaImage] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e613b889bf8c67541a14b003e0db47af7c88ef76f2c4b79ef2fcc3fdc07c013c?placeholderIfAbsent=true&apiKey=96fec37e0c544caea912d1419137e19d"
  );

  const refreshCaptcha = () => {
    // In a real implementation, this would fetch a new captcha image
    setCaptchaImage(
      `https://cdn.builder.io/api/v1/image/assets/TEMP/e613b889bf8c67541a14b003e0db47af7c88ef76f2c4b79ef2fcc3fdc07c013c?placeholderIfAbsent=true&apiKey=96fec37e0c544caea912d1419137e19d?refresh=${Date.now()}`
    );
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3 justify-between items-end">
        <div className="flex-grow">
          <label
            htmlFor="captcha-input"
            className="block text-sm font-semibold text-zinc-800 mb-1"
          >
            Enter Captcha
          </label>
          <input
            id="captcha-input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter the shown text"
            className="w-full px-3 py-3 text-base bg-neutral-50 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>
        <div className="flex items-center p-2 bg-neutral-50 border border-stone-300 rounded-md">
          <img src={captchaImage} alt="Captcha" className="h-10 mr-2" />
          <button
            type="button"
            onClick={refreshCaptcha}
            className="p-1 hover:bg-neutral-200 rounded-full transition-colors"
            aria-label="Refresh Captcha"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06245ac7c59a4fa6264b0664e1bf5b076a55da3d2297f14b928f09047c36556d?placeholderIfAbsent=true&apiKey=96fec37e0c544caea912d1419137e19d"
              alt=""
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaptchaField;
