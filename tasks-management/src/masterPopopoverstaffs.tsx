import React, { useState, useRef, useEffect } from 'react';


function Popover({ trigger, children, position = 'bottom' }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const positionClasses = {
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 transform -translate-y-1/2'
  };

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute z-50 p-4 bg-white border border-gray-300 rounded-lg shadow-lg min-w-48 ${positionClasses[position]}`}>
          <div className="text-sm text-gray-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// Hover Popover Component
function HoverPopover({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {isOpen && (
        <div 
          className="absolute z-50 p-3 bg-gray-800 text-white text-sm rounded shadow-lg mt-2 left-1/2 transform -translate-x-1/2 min-w-32"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
          {/* Arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
}

// Advanced Popover with positioning
function AdvancedPopover({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  };

  const handleClick = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && 
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  return (
    <>
      <span ref={triggerRef} onClick={handleClick}>
        {trigger}
      </span>
      {isOpen && (
        <div 
          ref={popoverRef}
          className="fixed z-50 p-4 bg-white border border-gray-300 rounded-lg shadow-xl max-w-xs"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default function PopoverExamples() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Popover Examples</h1>
        
        {/* Basic Click Popovers */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Click Popovers (Different Positions)</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Popover 
              position="bottom"
              trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Bottom Popover</button>}
            >
              <div>
                <h3 className="font-medium mb-2">Bottom Popover</h3>
                <p>This popover appears below the trigger button.</p>
                <button className="mt-2 px-3 py-1 bg-gray-200 rounded text-sm">Action</button>
              </div>
            </Popover>

            <Popover 
              position="top"
              trigger={<button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Top Popover</button>}
            >
              <div>
                <h3 className="font-medium mb-2">Top Popover</h3>
                <p>This one appears above!</p>
              </div>
            </Popover>

            <Popover 
              position="left"
              trigger={<button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Left Popover</button>}
            >
              <div>
                <h3 className="font-medium mb-2">Left Side</h3>
                <p>Appears to the left of the trigger.</p>
              </div>
            </Popover>

            <Popover 
              position="right"
              trigger={<button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Right Popover</button>}
            >
              <div>
                <h3 className="font-medium mb-2">Right Side</h3>
                <p>Appears to the right!</p>
              </div>
            </Popover>
          </div>
        </div>

        {/* Hover Tooltips */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Hover Tooltips</h2>
          <div className="space-y-4">
            <p>
              Hover over this{' '}
              <HoverPopover trigger={<span className="text-blue-500 underline cursor-pointer">highlighted text</span>}>
                This is a hover tooltip! It appears when you hover and disappears when you leave.
              </HoverPopover>
              {' '}to see a tooltip.
            </p>

            <div className="flex gap-4">
              <HoverPopover trigger={
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full cursor-pointer"></div>
              }>
                Pretty gradient circle!
              </HoverPopover>

              <HoverPopover trigger={
                <div className="w-12 h-12 bg-gray-600 rounded cursor-pointer flex items-center justify-center text-white">
                  ?
                </div>
              }>
                <div>
                  <strong>Help Icon</strong><br/>
                  This provides additional context or help information.
                </div>
              </HoverPopover>
            </div>
          </div>
        </div>

        {/* Advanced Popover */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Advanced Popover (Fixed Positioning)</h2>
          <p className="mb-4">This popover uses fixed positioning and adjusts for scrolling:</p>
          
          <AdvancedPopover 
            trigger={<button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Advanced Popover</button>}
          >
            <div>
              <h3 className="font-medium mb-2">Advanced Features</h3>
              <ul className="text-sm space-y-1">
                <li>• Fixed positioning</li>
                <li>• Scroll-aware</li>
                <li>• Resize-aware</li>
                <li>• Click outside to close</li>
              </ul>
              <div className="mt-3 pt-3 border-t">
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm mr-2">Accept</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Cancel</button>
              </div>
            </div>
          </AdvancedPopover>
        </div>

        {/* Content Examples */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Rich Content Examples</h2>
          <div className="flex flex-wrap gap-4">
            <Popover 
              trigger={<button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">User Profile</button>}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-sm text-gray-500">john@example.com</p>
                  <p className="text-xs text-gray-400">Last seen 2 hours ago</p>
                </div>
              </div>
            </Popover>

            <Popover 
              trigger={<button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Quick Actions</button>}
            >
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm">Edit Profile</button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm">Settings</button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm">Help Center</button>
                <hr className="my-2"/>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm text-red-600">Sign Out</button>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}