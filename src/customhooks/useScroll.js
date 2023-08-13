const useScroll = () => {
  const scroll = (anchor) => {
    const className = `${anchor}`;
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { scroll };
};

export default useScroll;
