import React, { useEffect, useState } from 'react';

const DesignerProfiles = () => {
  const [designers, setDesigners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDesigners = () => {
      try {
        console.log('Fetching designers...');
        // Mock data with additional details
        const mockDesigners = [
          { id: 1, name: 'Sabyasachi Mukherjee', bio: 'Sabyasachi has won various prestigious awards, including the 2001 Femina British Council award for Most Outstanding Young Designer in India and Grand Winner at the Mercedes Benz Asia Fashion Week in 2003.', image: 'https://www.nifdpunekothrud.com/assets/images/blog/Sabyasachi_Mukherjee.webp' },
          { id: 2, name: 'Manish Malhotra', bio: 'Manish’s vast portfolio includes big-budget, big-banner, and mainstream Bollywood movies like Dil to Pagal Hain, Judaai, Dilwale Dulhania Le Jayenge, and many others. Manish Malhotra who is the most popular fashion designer in current fashion industry. He is also NIFD', image: 'https://www.nifdpunekothrud.com/assets/images/blog/Manish_Malhotra.webp' },
          { id: 3, name: 'Masaba Gupta', bio: 'She is the daughter of actress Neena Gupta and former West Indies cricketer Viv Richards. In 2020, Netflix released a web series named Masaba Masaba, based on the life of this exceptionally talented and successful fashion designer.', image: 'https://www.nifdpunekothrud.com/assets/images/blog/Masaba_Gupta.webp' },
        ];
        setDesigners(mockDesigners);
      } catch (err) {
        console.error('Error fetching designers:', err);
        setError('Failed to load designer profiles.');
      }
    };
    fetchDesigners();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Designer Profiles</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {designers.map(designer => (
          <div key={designer.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
            <img src={designer.image} alt={designer.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#333' }}>{designer.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
              {designer.bio}
            </p>
            <a href="https://www.nifdpunekothrud.com/blog/top-10-famous-fashion-designers-in-india.php" style={{ fontSize: '0.9rem', color: '#FF5252', textDecoration: 'none', display: 'block', marginTop: '10px' }}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerProfiles;
