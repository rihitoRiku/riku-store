"use client"
import * as React from "react";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="container max-w-screen-xl mx-auto px-4 border-t py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-muted-foreground max-w-[24rem]">
            Thank you for your trust using our store. Don't forget to follow for more offers:
          </p>
          
          <a
            href="https://instagram.com/rikustore.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
