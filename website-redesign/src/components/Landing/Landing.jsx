import React from 'react';
import manasLogo from '../../assets/Logos/manas-with-border.png';
import manasMotto from '../../assets/Logos/manas-motto.svg';
export default function Landing() {
  return (
    <div className="landing-manas">
      <img src={manasLogo} alt={'Project Manas'} />
      <img src={manasMotto} alt={'Project Manas'} />
    </div>
  );
}
