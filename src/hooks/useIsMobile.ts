const useIsMobile = () => {
  return window.matchMedia("(max-width: 740px)").matches
}

export default useIsMobile;

