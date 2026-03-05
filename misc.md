
// Basic usage
<HoverTooltip
  isVisible={isHovered}
  text="Home"
  position="bottom"
/>

// Fully customized
<HoverTooltip
  isVisible={isHovered}
  text="Custom Tooltip"
  position="top"
  backgroundColor="#3B82F6"
  textColor="#ffffff"
  borderColor="#1D4ED8"
  arrowColor="#2563EB"
  offset={80}
  translateX={10}
  rotate={5}
  className="custom-class"
/>


// Corner positioning
<HoverTooltip position="top-left" />
<HoverTooltip position="bottom-right" />

// Center overlay (no arrow)
<HoverTooltip position="center" showArrow={false} />

// Custom fine-tuning
<HoverTooltip 
  position="top" 
  translateX={50} 
  translateY={-20} 
  rotate={5} 
/>