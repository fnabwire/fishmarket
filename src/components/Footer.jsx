import React from 'react'

const Footer = () => {
    return (
      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Fish className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Fish Market Platform</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              &copy; {new Date().getFullYear()} Fish Market Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
