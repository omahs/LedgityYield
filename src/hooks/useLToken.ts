import { ContractId, LTokenId, contracts } from "../../hardhat/deployments";
import { useDApp } from "./useDApp";

export const useLToken = (symbol: LTokenId) => {
  const { chain } = useDApp();
  return {
    address: contracts[symbol].address[chain.id],
    underlyingSymbol: symbol.slice(1),
    underlyingAddress: contracts[symbol.slice(1) as ContractId].address[chain.id],
  };
};
