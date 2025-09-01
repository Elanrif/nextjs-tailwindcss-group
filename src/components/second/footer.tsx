import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center mx-16 gap-5 mt-3 mb-2">
      <div>
        <Image
          src="/Images/rakuten.png"
          width={100}
          height={70}
          alt="Rakuten Logo"
        />
      </div>
      <div>
        <Image src="/Images/ncr.png" width={100} height={70} alt="NCR Logo" />
      </div>
      <div>
        <Image
          src="/Images/mondaycom.png"
          width={210}
          height={100}
          alt="Monday.com Logo"
        />
      </div>
      <div>
        <Image
          src="/Images/disney.png"
          width={120}
          height={70}
          alt="Disney Logo"
        />
      </div>
      <div>
        <Image
          src="/Images/dropbox.png"
          width={150}
          height={100}
          alt="Dropbox Logo"
        />
      </div>
    </div>
  );
}
