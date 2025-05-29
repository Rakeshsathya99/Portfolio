import React, { createContext, useContext, useState, useEffect } from 'react';

type CursorContextType = {
  cursorType: string;
  setCursorType: (type: string) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<string>('default');
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    // Hide cursor when inactive
    const timeout = setTimeout(() => {
      setCursorVisible(false);
    }, 5000);

    // Show cursor on movement
    const handleMouseMove = () => {
      setCursorVisible(true);
      clearTimeout(timeout);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [cursorVisible]);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};