'use client'
import React from 'react';
import useEventbrite from 'react-eventbrite-popup-checkout';
import Button from '../button/button';
import { useTranslations } from 'next-intl';

const Eventbrite = () => {
  const t = useTranslations("navbar")
  const handleOrderCompleted = React.useCallback(() => {
    console.log('Order was completed successfully');
  }, []);
  const modalButtonCheckout = useEventbrite({
    eventId: '881387522807',
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });
  
  return (
    <div id="my-app">
      {modalButtonCheckout && (
        <Button id={modalButtonCheckout.id} title={t("button")} bigger/>
      )}
    </div>
  )
};
export default Eventbrite;