import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';

const widgetConfig: WidgetConfig = {
  integrator: 'Your dApp/company name',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetPage = () => {
  return <LiFiWidget config={widgetConfig} />;
};