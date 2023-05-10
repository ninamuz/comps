import React, { useState } from 'react';
import { GoChevronDown, GoDash } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    // to decide wheter or not we display the div item.content 
    // react doesn't render falsey values
    const isExpanded = index === expandedIndex;

    const icon = <span className='text-2xl'>
      {isExpanded ? <GoChevronDown /> : <GoDash />}
    </span>

    return (
      <div key={item.id}>
        <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return (
      <div className='border-x border-t rounded'>{renderedItems}</div>
  )
}
