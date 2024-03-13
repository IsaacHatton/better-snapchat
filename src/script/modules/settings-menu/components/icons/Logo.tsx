import React from 'react';

export default function Logo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299.912 297H300V151H299.997C299.999 150.667 300 150.334 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150C0 150.334 0.00108895 150.667 0.00326349 151H0V297H0.0885008C0.0297676 297.992 -1.52588e-05 298.993 -1.52588e-05 300C-1.52588e-05 327.614 22.3857 350 50 350C77.6142 350 100 327.614 100 300C100 327.614 122.386 350 150 350C177.614 350 200 327.614 200 300C200 327.614 222.386 350 250 350C277.614 350 300 327.614 300 300C300 298.993 299.97 297.992 299.912 297ZM200 300C200 298.993 199.97 297.992 199.911 297H200.089C200.03 297.992 200 298.993 200 300ZM100 300C100 298.993 99.9702 297.992 99.9115 297H100.089C100.03 297.992 100 298.993 100 300ZM225 150C225 163.807 213.807 175 200 175C186.193 175 175 163.807 175 150C175 136.193 186.193 125 200 125C213.807 125 225 136.193 225 150ZM100 175C113.807 175 125 163.807 125 150C125 136.193 113.807 125 100 125C86.1929 125 75 136.193 75 150C75 163.807 86.1929 175 100 175ZM130.303 219.697C127.374 216.768 122.626 216.768 119.697 219.697C116.768 222.626 116.768 227.374 119.697 230.303C128.848 239.454 138.976 245 150 245C161.024 245 171.152 239.454 180.303 230.303C183.232 227.374 183.232 222.626 180.303 219.697C177.374 216.768 172.626 216.768 169.697 219.697C162.181 227.213 155.643 230 150 230C144.357 230 137.819 227.213 130.303 219.697Z"
        fill="currentColor"
      />
      <path d="M237.355 294H68V319H237.355V294Z" fill="currentColor" />
    </svg>
  );
}