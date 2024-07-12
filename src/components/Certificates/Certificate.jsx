import React from 'react';
import Java from '../../assets/Java.png';
import C from '../../assets/C.png';
import ReactCert from '../../assets/React.png';
import Cloud from '../../assets/Cloud.png';
import Javascript from '../../assets/Javascript.png';
import cpp from '../../assets/Java.png';
import DS from '../../assets/DataScience.png';
import Cyber from '../../assets/CyberSecurity.png';
import Html from '../../assets/Html.png';
import Mysql from '../../assets/Mysql.png';
import Octanet from '../../assets/Octanet.png';
import Python from '../../assets/Python.png';
const certifications = [
  { 
    organization: 'Udemy', 
    title: 'HTML', 
    link: 'https://drive.google.com/open?id=1u5UenYhce6MZPzbZQmoLY3pxgjidP7ie&usp=drive_copy',
    imageUrl: Html
  },
  { 
    organization: 'Udemy', 
    title: 'Java', 
    link: 'https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy',
    imageUrl: Java
  },
  { 
    organization: 'Udemy', 
    title: 'C++', 
    link: 'https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy',
    imageUrl: cpp
  },
  { 
    organization: 'Udemy', 
    title: 'JavaScript', 
    link: 'https://drive.google.com/open?id=1VXkRCYFI_OQY0rB2B8R3e_vRi0t8x97e&usp=drive_copy',
    imageUrl: Javascript
  },
  { 
    organization: 'Udemy', 
    title: 'MySQL', 
    link: 'https://drive.google.com/open?id=1olqQefy0dQP4is_HirHZT68iNDfcHWm_&usp=drive_copy',
    imageUrl: Mysql
  },
  { 
    organization: 'Red Hat', 
    title: 'Python', 
    link: 'https://drive.google.com/open?id=1iaO4mUG8uLBbedHVbiKxLjDvowLKemJm&usp=drive_copy',
    imageUrl: Python
  },
  { 
    organization: 'Udemy', 
    title: 'React', 
    link: 'https://drive.google.com/open?id=1rL1lWj5HSIooLRCDBXzIiWuUaNpsexaR&usp=drive_copy',
    imageUrl: ReactCert
  },
  { 
    organization: 'Great Learning', 
    title: 'C', 
    link: 'https://drive.google.com/open?id=13abjSc1xKxo3NPwgE7w4wttOP5YDJ86d&usp=drive_copy',
    imageUrl: C
  },
  { 
    organization: 'Great Learning', 
    title: 'Cloud Basics', 
    link: 'https://drive.google.com/open?id=1i_TDPbWK9FiOfIo5dOHk3BMS5n15je_g&usp=drive_copy',
    imageUrl: Cloud
  },
  { 
    organization: 'Great Learning', 
    title: 'Cyber Security', 
    link: 'https://drive.google.com/open?id=13OBQDm52lvPCWpQeHUvcpyJDTZi2Ugad&usp=drive_copy',
    imageUrl: Cyber
  },
  { 
    organization: 'Great Learning', 
    title: 'Data Science Basics', 
    link: 'https://drive.google.com/open?id=1NJDfgaXV13TzjtHCEWE37R-tPTDfCvIx&usp=drive_copy',
    imageUrl: DS
  },
  { 
    organization: 'Octanet Training', 
    title: 'Web Development', 
    link: 'https://drive.google.com/open?id=1CO3qGVFoQ6y6A89CWNBTYeaTuuT3NOYT&usp=drive_copy',
    imageUrl: Octanet
  },
];

function Certifications() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={cert.imageUrl} alt={`${cert.title} Certificate`} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="flex-1 p-4">
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-lg mb-4">{cert.organization}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
