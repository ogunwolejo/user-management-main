import { createContext, useState } from 'react';

// Create the context object
export const SideBarContext = createContext({ isCollapsed: false, toggleCollapsed: () => {} });

