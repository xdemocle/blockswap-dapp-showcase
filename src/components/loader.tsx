interface LoaderProps {
  message: string;
}

const Loader = ({ message }: LoaderProps) => {
  return <div>{message}</div>;
};

export default Loader;
