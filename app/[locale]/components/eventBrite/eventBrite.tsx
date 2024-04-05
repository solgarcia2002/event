'use client'
import React from 'react';
import useEventbrite from 'react-eventbrite-popup-checkout';

const Eventbrite = () => {
  const handleOrderCompleted = React.useCallback(() => {
    console.log('Order was completed successfully');
  }, []);
  const modalButtonCheckout = useEventbrite({
    eventId: '877510937837',
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });
  
  return (
    <div id="my-app">
      {/* guard for null - resolves when Eventbrite loads */}
      {modalButtonCheckout && (
        <button type="button" id={modalButtonCheckout.id}>
          Register now
        </button>
      )}
    </div>
  )
};
export default Eventbrite;