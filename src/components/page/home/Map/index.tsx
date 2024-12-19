import React from 'react'

const index = () => {
  return (
    <div className='max-w-screen-xl mx-auto rounded-lg sm:p-12'>
      <MapEmbed />
    </div>
  )
}

export default index




export const MapEmbed = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1506.514174433206!2d-73.83697612876925!3d40.958957801867314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c292cdd7011265%3A0xed9bb17c3ef4f378!2sIslamic%20Community%20Center%20of%20Mid%20Westchester!5e0!3m2!1sen!2sin!4v1734565049778!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: '0', borderRadius: '8px' }}

        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};


