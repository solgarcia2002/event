"use client"
import { useEffect } from "react";

declare global {
  interface Window {
    EBWidgets: {
      createWidget(options: WidgetOptions): void;
    };
  }
}

interface WidgetOptions {
  widgetType: string;
  eventId: string;
  iframeContainerId: string;
  iframeContainerHeight?: number;
  onOrderComplete?: () => void;
}

const EventbriteWidget = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const exampleCallback = () => {
        console.log('Order complete!')
      };

      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '877510937837',
        iframeContainerId: 'eventbrite-widget-container-877510937837',
        iframeContainerHeight: 425,
        onOrderComplete: exampleCallback,
      });
    }
  }, []);

  return (
    <div id="eventbrite-widget-container-877510937837"></div>
  );
};

export default EventbriteWidget;