"use client";

import { useEffect } from 'react';

const EventbriteButton: React.FC = () => {
  useEffect(() => {
    const loadEventbriteWidget = () => {
      var exampleCallback = () => {
        console.log('Order complete!');
      };

      (window as any).EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '877510937837',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-877510937837',
        onOrderComplete: exampleCallback,
      });
    };

    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        loadEventbriteWidget();
      };
    }
  }, []);

  return (
    <>
      {/* Noscript content for added SEO */}
      <noscript>
        <a href="https://www.eventbrite.com/e/prueba-tickets-877510937837" rel="noopener noreferrer" target="_blank">
          Buy Tickets on Eventbrite
        </a>
      </noscript>
      <button id="eventbrite-widget-modal-trigger-877510937837" type="button">
        Buy Tickets
      </button>
    </>
  );
};

export default EventbriteButton;
