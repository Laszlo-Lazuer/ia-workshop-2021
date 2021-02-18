import { createContext } from 'react';

export const AppVars = createContext({
    step: 1,
    question: 'some question',
  });

// Create context
export const NumberContext = createContext();

export const appContext = createContext(null);

