import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HoverTooltipProps {
  isVisible: boolean;
  text: string;
  position?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center';
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  arrowColor?: string;
  className?: string;
  offset?: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  showArrow?: boolean;
  children?: React.ReactNode;
}

const HoverTooltip: React.FC<HoverTooltipProps> = ({
  isVisible,
  text,
  position = 'top',
  backgroundColor = '#ffbe6f',
  textColor = '#1c1917',
  borderColor = '#fca5a5',
  arrowColor,
  className = '',
  offset = 60,
  translateX = 0,
  translateY = 0,
  rotate = 0,
  showArrow = true,
  children,
}) => {
  const finalArrowColor = arrowColor || backgroundColor;

  const getPositionStyles = () => {
    const baseStyle: React.CSSProperties = {};

    switch (position) {
      case 'top':
        baseStyle.bottom = `${offset}px`;
        baseStyle.left = '50%';
        baseStyle.transform = 'translateX(-50%)';
        break;
      case 'bottom':
        baseStyle.top = `${offset}px`;
        baseStyle.left = '50%';
        baseStyle.transform = 'translateX(-50%)';
        break;
      case 'left':
        baseStyle.right = `${offset}px`;
        baseStyle.top = '50%';
        baseStyle.transform = 'translateY(-50%)';
        break;
      case 'right':
        baseStyle.left = `${offset}px`;
        baseStyle.top = '50%';
        baseStyle.transform = 'translateY(-50%)';
        break;
      case 'top-left':
        baseStyle.bottom = `${offset}px`;
        baseStyle.left = '0px';
        break;
      case 'top-right':
        baseStyle.bottom = `${offset}px`;
        baseStyle.right = '0px';
        break;
      case 'bottom-left':
        baseStyle.top = `${offset}px`;
        baseStyle.left = '0px';
        break;
      case 'bottom-right':
        baseStyle.top = `${offset}px`;
        baseStyle.right = '0px';
        break;
      case 'center':
        baseStyle.top = '50%';
        baseStyle.left = '50%';
        baseStyle.transform = 'translate(-50%, -50%)';
        break;
    }

    // Apply custom translations
    if (translateX !== 0 || translateY !== 0) {
      const currentTransform = baseStyle.transform || '';
      baseStyle.transform = `${currentTransform} translate(${translateX}px, ${translateY}px)`;
    }

    return baseStyle;
  };

  const getArrowStyles = () => {
    if (!showArrow) return { display: 'none' };

    const arrowStyle: React.CSSProperties = {
      position: 'absolute',
      width: 0,
      height: 0,
    };

    switch (position) {
      case 'top':
      case 'top-left':
      case 'top-right':
        arrowStyle.top = '100%';
        arrowStyle.left =
          position === 'top'
            ? '50%'
            : position === 'top-left'
              ? '20px'
              : 'auto';
        arrowStyle.right = position === 'top-right' ? '20px' : 'auto';
        arrowStyle.transform = position === 'top' ? 'translateX(-50%)' : 'none';
        arrowStyle.borderLeft = '10px solid transparent';
        arrowStyle.borderRight = '10px solid transparent';
        arrowStyle.borderTop = `15px solid ${finalArrowColor}`;
        break;
      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        arrowStyle.bottom = '100%';
        arrowStyle.left =
          position === 'bottom'
            ? '50%'
            : position === 'bottom-left'
              ? '20px'
              : 'auto';
        arrowStyle.right = position === 'bottom-right' ? '20px' : 'auto';
        arrowStyle.transform =
          position === 'bottom' ? 'translateX(-50%)' : 'none';
        arrowStyle.borderLeft = '10px solid transparent';
        arrowStyle.borderRight = '10px solid transparent';
        arrowStyle.borderBottom = `15px solid ${finalArrowColor}`;
        break;
      case 'left':
        arrowStyle.left = '100%';
        arrowStyle.top = '50%';
        arrowStyle.transform = 'translateY(-50%)';
        arrowStyle.borderTop = '10px solid transparent';
        arrowStyle.borderBottom = '10px solid transparent';
        arrowStyle.borderLeft = `15px solid ${finalArrowColor}`;
        break;
      case 'right':
        arrowStyle.right = '100%';
        arrowStyle.top = '50%';
        arrowStyle.transform = 'translateY(-50%)';
        arrowStyle.borderTop = '10px solid transparent';
        arrowStyle.borderBottom = '10px solid transparent';
        arrowStyle.borderRight = `15px solid ${finalArrowColor}`;
        break;
      case 'center':
        arrowStyle.display = 'none'; // No arrow for center position
        break;
    }

    return arrowStyle;
  };

  const getInitialAnimation = () => {
    switch (position) {
      case 'top':
      case 'top-left':
      case 'top-right':
        return { opacity: 0, y: 20, scale: 0.6 };
      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return { opacity: 0, y: -20, scale: 0.6 };
      case 'left':
        return { opacity: 0, x: 20, scale: 0.6 };
      case 'right':
        return { opacity: 0, x: -20, scale: 0.6 };
      case 'center':
        return { opacity: 0, scale: 0.6 };
      default:
        return { opacity: 0, y: 20, scale: 0.6 };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={getInitialAnimation()}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 260,
              damping: 20,
            },
          }}
          exit={{ opacity: 0, scale: 0.6 }}
          style={{
            rotate: rotate,
            zIndex: 1000,
            whiteSpace: 'nowrap',
          }}
          className="flex justify-center items-center"
        >
          <div
            className={`border-solid border-2 shadow-2xl flex justify-center items-center px-4 py-2 absolute z-[10] rounded-xl ${className}`}
            style={{
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              ...getPositionStyles(),
            }}
          >
            <span
              className="font-medium text-base"
              style={{ color: textColor }}
            >
              {text}
            </span>
            {children}
            <div style={getArrowStyles()} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverTooltip;
