// components/AccuratePercentageLoader.js
import { useState, useEffect } from "react";

export default function AccuratePercentageLoader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Function to simulate loading progress
    const simulateLoading = () => {
      const progress = setInterval(() => {
        setPercent((prev) => {
          // Increase the percentage gradually
          if (prev < 100) {
            const increment = Math.min(100 - prev, Math.random() * 10); // Random increment between 0-10%
            return prev + increment;
          } else {
            clearInterval(progress); // Clear the interval when it reaches 100
            return 100;
          }
        });
      }, 200); // Adjust the interval duration as needed
    };

    simulateLoading();
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-black dark:border-white"></div>
          <div className="absolute text-2xl font-semibold text-black dark:text-white">
            {Math.round(percent)}%
          </div>
        </div>
      </div>
    </div>
  );
}
