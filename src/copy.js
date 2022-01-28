import { React, useState } from 'react';

function Copy(copyText) {
  const [copied, setcopied] = useState(false);

  const copyTextToClipboard = (text) => {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  };

  const HandleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setcopied(true);
        setTimeout(() => {
          setcopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" value={copyText} readOnly />
      <button onClick={HandleCopyClick}>
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default Copy;
