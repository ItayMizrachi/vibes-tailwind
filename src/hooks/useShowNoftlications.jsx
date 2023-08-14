import { useState } from "react";

export const useShowNoftlications = () => {
  const [showNoftlications, setShowNoftlications] = useState(false);

  const toggleNoftlications = () => {
    setShowNoftlications(!showNoftlications);
  };

  return { showNoftlications, setShowNoftlications, toggleNoftlications };
};
