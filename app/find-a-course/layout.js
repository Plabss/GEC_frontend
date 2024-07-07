import Tab from '@/components/Home/Tab';
import React from 'react'

export default function FindACourseLayout({ children }) {
  return (
    <div style={{ marginTop: "8rem" }}>
      <Tab />
      {children}
    </div>
  )
}
