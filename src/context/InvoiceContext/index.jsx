import React from 'react';

const InvoiceContext = React.createContext({
  invoice: {},
  // eslint-disable-next-line no-unused-vars
  setInvoice: (invoice) => {},
});

export default InvoiceContext;
