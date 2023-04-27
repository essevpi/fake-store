import { motion, AnimatePresence } from 'framer-motion';
import styles from './TabWindow.styles';

//TODO: Make tabs scrcollable for when there are too many to fit on the screen

const TabWindow = ({ items, selectedTab, onTabSelect }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <ul className={styles.tabs}>
          {items.map((item) => (
            <li
              onClick={() => onTabSelect(item.label)}
              className={`${styles.tabItem} ${
                item.label === selectedTab && `${styles.activeTab}`
              }`}
              key={item.label}
            >
              {item.label}
              {item.label === selectedTab ? (
                <motion.div
                  className={styles.tabUnderline}
                  layoutId='tabUnderline'
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.windowContainer}
          key={selectedTab}
        >
          {items.find((i) => i.label === selectedTab).item}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabWindow;
