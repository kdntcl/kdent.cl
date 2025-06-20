/// <reference types="react-scripts" />

declare namespace React {
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
      fetchpriority?: 'high' | 'low' | 'auto';
    }
  }
