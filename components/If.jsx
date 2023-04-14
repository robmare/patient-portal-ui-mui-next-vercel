const If = ({ condition, children }) => {
    if (condition) {
      return children;
    }
};

export default If;