export const getErcShortAddress = (address: string | undefined) => {
  if (!address) {
    return '0x8C51...F4E8';
  }
  const addr = address.toUpperCase().replace('0X', '0x');

  return `${addr.substr(0, 6)}...${addr.substr(addr.length - 4, 4)}`;
};
