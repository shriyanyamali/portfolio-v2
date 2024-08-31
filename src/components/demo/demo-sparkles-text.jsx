import React, { useEffect, useState } from 'react';
import SparklesText from "@/components/magicui/sparkles-text";

export function SparklesTextDemo() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = "About Me";
      setData(result);
    };

    fetchData();
  }, []);

  return <SparklesText text={data} />;
}
