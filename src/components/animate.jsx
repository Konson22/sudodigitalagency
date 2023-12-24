// AnimatedComponent.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={parentVariants}
      className="my-8"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={childVariants}
          key={index}
          className="mb-4"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedComponent;


// App.js
import React from 'react';
import AnimatedComponent from './AnimatedComponent';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedComponent>
        <h1 className="text-3xl font-bold">Hello, Framer Motion!</h1>
        <p className="text-gray-600">This is an animated component.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Click me!
        </button>
      </AnimatedComponent>
    </div>
  );
};

export default App;

SWDEXkm,l./+

2514\
}{PO(8iut2wQ!ZZt bg.01)7
|_P:*Jhyd3ea16547
\][POIUYTR54]