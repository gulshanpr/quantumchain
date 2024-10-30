import React, { useEffect } from "react";

const SubstackEmbed: React.FC = () => {
  useEffect(() => {
    (window as any).CustomSubstackWidget = {
      substackUrl: "eigenjobs.substack.com",
      placeholder: "Your Email",
      buttonText: "Create Job Alert",
      theme: "custom",
      colors: {
        primary: "#FFFFFF",
        input: "#FFFFFF",
        email: "#000000",
        text: "#1A0C6D",
      },
    };

    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="custom-substack-embed"></div>;
};

export default SubstackEmbed;
