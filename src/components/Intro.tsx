import { useState } from 'react';
import HoverTooltip from './ui/HoverTooltip';

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Welcome Home</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          This is the home section. The navbar will automatically highlight when
          you scroll to this section.
        </p>
        <div className="mt-8">
          <p className="text-white/50 text-sm">
            Try clicking on the navbar links above to see smooth scrolling in
            action!
          </p>

          {/* Demo Grid for Different Tooltip Positions */}
          <div className="grid grid-cols-3 gap-8 mt-8 max-w-2xl mx-auto">
            {/* Top Left */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full">
                Top Left
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Top Left Tooltip!"
                position="top-left"
                backgroundColor="#EF4444"
                textColor="#ffffff"
                borderColor="#DC2626"
                offset={50}
              />
            </div>

            {/* Top Center */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors w-full">
                Top Center
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Top Center Tooltip!"
                position="top"
                backgroundColor="#10B981"
                textColor="#ffffff"
                borderColor="#059669"
                offset={50}
              />
            </div>

            {/* Top Right */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors w-full">
                Top Right
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Top Right Tooltip!"
                position="top-right"
                backgroundColor="#8B5CF6"
                textColor="#ffffff"
                borderColor="#7C3AED"
                offset={50}
              />
            </div>

            {/* Left */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors w-full">
                Left
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Left Tooltip!"
                position="left"
                backgroundColor="#F59E0B"
                textColor="#ffffff"
                borderColor="#D97706"
                offset={50}
              />
            </div>

            {/* Center */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors w-full">
                Center
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Center Tooltip!"
                position="center"
                backgroundColor="#6B7280"
                textColor="#ffffff"
                borderColor="#4B5563"
                showArrow={false}
              />
            </div>

            {/* Right */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors w-full">
                Right
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Right Tooltip!"
                position="right"
                backgroundColor="#EC4899"
                textColor="#ffffff"
                borderColor="#DB2777"
                offset={50}
              />
            </div>

            {/* Bottom Left */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors w-full">
                Bottom Left
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Bottom Left Tooltip!"
                position="bottom-left"
                backgroundColor="#6366F1"
                textColor="#ffffff"
                borderColor="#4F46E5"
                offset={50}
              />
            </div>

            {/* Bottom Center */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors w-full">
                Bottom Center
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Bottom Center Tooltip!"
                position="bottom"
                backgroundColor="#14B8A6"
                textColor="#ffffff"
                borderColor="#0D9488"
                offset={50}
              />
            </div>

            {/* Bottom Right */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full">
                Bottom Right
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Bottom Right Tooltip!"
                position="bottom-right"
                backgroundColor="#F97316"
                textColor="#ffffff"
                borderColor="#EA580C"
                offset={50}
              />
            </div>
          </div>

          {/* Custom Translation Example */}
          <div className="mt-8">
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                Custom Position (translateX: 50px, translateY: -20px)
              </button>
              <HoverTooltip
                isVisible={isHovered}
                text="Custom positioned tooltip!"
                position="top"
                backgroundColor="#06B6D4"
                textColor="#ffffff"
                borderColor="#0891B2"
                offset={60}
                translateX={50}
                translateY={-20}
                rotate={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
