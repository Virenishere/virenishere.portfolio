'use client';

import Skills from '@/constants/skills';
import FooterData from '@/constants/footer';
import { motion } from 'motion/react';

const IconTest = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Icon Test Page</h1>
        <p className="text-white/70">Testing all Lucide React icons used in the portfolio</p>
      </div>

      {/* Skills Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Skills Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <IconComponent className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-medium text-sm">{skill.name}</h3>
                <p className="text-white/60 text-xs mt-1 capitalize">{skill.category}</p>
                <div className="mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    skill.level === 'expert' ? 'bg-green-500/20 text-green-300' :
                    skill.level === 'advanced' ? 'bg-blue-500/20 text-blue-300' :
                    skill.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Social Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Social Media Icons</h2>
        <div className="flex justify-center gap-6">
          {FooterData.socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </motion.a>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <p className="text-white/70">Click on the icons to test the links</p>
        </div>
      </section>

      {/* Skills by Category */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Skills by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['frontend', 'backend', 'database', 'tools', 'cloud'].map((category) => {
            const categorySkills = Skills.filter(skill => skill.category === category);
            return (
              <motion.div
                key={category}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h3>
                <div className="space-y-3">
                  {categorySkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.id} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-white/80" />
                        <span className="text-white/90">{skill.name}</span>
                        <span className={`ml-auto text-xs px-2 py-1 rounded ${
                          skill.level === 'expert' ? 'bg-green-500/20 text-green-300' :
                          skill.level === 'advanced' ? 'bg-blue-500/20 text-blue-300' :
                          skill.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default IconTest;